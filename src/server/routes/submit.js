const Joi = require('joi')
const { waterfall } = require('async')
const { nearMiss, positiveIntervention } = require('../../constants.js')

const renderEmail = request => (payload, cb) => {
  request.render('email', payload, (err, emailHtml) => {
    if (err) return cb(err)

    cb(null, Object.assign({}, payload, { emailHtml }))
  })
}

const route = {
  method: 'POST',
  path: '/submit',
  config: {
    handler: (request, reply) => {
      const { payload, server: { plugins: { model } } } = request
      const photoUrl = model.getUrl(payload.photoKey)
      const payloadWithPhotoUrl = Object.assign({}, payload, { photoUrl })

      waterfall(
        [
          model.submitReport(payloadWithPhotoUrl),
          renderEmail(request),
          model.sendEmail
        ],
        (error, payload) => {
          if (error) return console.error(error)

          const { s3PutUrl } = payload
          reply({ s3PutUrl })
        }
      )
    },
    payload: {
      maxBytes: 10485760
    },
    validate: {
      failAction: (request, reply, src, err) => {
        console.log(err.data.details)
        return reply(JSON.stringify(err.data.details)).code(500)
      },
      payload: {
        locationFirst: Joi.string().required(),
        locationSecond: Joi.string().optional(),
        locationThird: Joi.string().optional(),
        name: Joi.string()
          .optional()
          .allow(''),
        photoKey: Joi.string().optional(),
        description: Joi.string().required(),
        reportType: [nearMiss, positiveIntervention]
      }
    }
  }
}

module.exports = route
