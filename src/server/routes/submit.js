const Joi = require('joi')
const { waterfall } = require('async')

const savePhotoIfExists = (saveImage, payload) => cb => {
  if (!payload.photo) return process.nextTick(() => cb(null, payload))

  saveImage(payload, cb)
}

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
      reply({})
      waterfall([
        savePhotoIfExists(model.saveImage, payload),
        model.submitReport,
        renderEmail(request),
        model.sendEmail
      ], error => {
        if (error) {
          console.error(error)
        }
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
        photo: Joi.string().regex(/^data:([A-Za-z-+/]+);base64,(.+)$/)
          .optional(),
        description: Joi.string().required(),
        reportType: ['near miss', 'positive intervention']
      }
    }
  }
}

module.exports = route
