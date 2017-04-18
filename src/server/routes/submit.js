const Joi = require('joi')
const { waterfall } = require('async')

const renderEmail = request => (payload, cb) => {
  request.render('email', payload, (err, emailHtml) => {
    if (err) return cb(err)

    cb(null, Object.assign({}, payload, { emailHtml }))
  })
}

const route = {
  method: 'POST',
  path: '/report',
  config: {
    handler: (request, reply) => {
      const { payload, server: { plugins: { model } } } = request
      const photoUrl = model.getUrl(payload.photoKey)
      const payloadWithPhotoUrl = Object.assign({}, payload, { photoUrl })

      waterfall([
        model.submitReport(payloadWithPhotoUrl),
        renderEmail(request),
        model.sendEmail
      ], (error, { s3PutUrl, photoData, photoExt }) => {
        if (error) return console.error(error)
        reply({ s3PutUrl })
      })
    },
    payload: {
      maxBytes: 10485760
    },
    validate: {
      payload: {
        locationFirst: Joi.string().required(),
        locationSecond: Joi.string().required(),
        locationThird: Joi.string().required(),
        name: Joi.string().optional(),
        photoKey: Joi.string().optional(),
        description: Joi.string().required(),
        reportType: ['near miss', 'positive intervention']
      }
    }
  }
}

module.exports = route
