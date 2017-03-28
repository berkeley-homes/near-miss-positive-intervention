const Joi = require('joi')
const { waterfall } = require('async')

const savePhotoIfExists = (payload, upload, decode) => cb => {
  const { photo } = payload
  if (!photo) return process.nextTick(() => cb(null, payload))

  const { photoS3Key, buffer } = decode(photo)

  upload(buffer, photoS3Key, (error, response) => {
    if (error) return cb(error)
    // what do we do with the response
    cb(null, Object.assign({}, payload, { photoS3Key }))
  })
}

const route = {
  method: 'POST',
  path: '/report',
  config: {
    handler: (request, reply) => {
      const { payload, server: { plugins: { model } } } = request
      waterfall([
        savePhotoIfExists(payload, model.saveImage, model.parsePhotoData),
        model.submitReport
      ], (error, response) => {
        if (error) {
          console.error(error)
          return reply(error)
        }
        reply('ok')
      })
    },
    validate: {
      payload: {
        locationFirst: ['site 1', 'site 2'],
        locationSecond: ['floor 1', 'floor 2'],
        locationThird: ['room 1', 'room 2'],
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
