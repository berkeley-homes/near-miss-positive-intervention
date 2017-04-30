const route = {
  method: 'PUT',
  path: '/s3-put-url',
  config: {
    handler: (request, reply) => {
      console.log('s3 put url')
      const { payload, server: { plugins: { model } } } = request
      model.generateSignedUrl(payload, (err, { s3PutUrl, photoKey }) => {
        if (err) return reply(err)

        reply({ s3PutUrl, photoKey })
      })
    }
  }
}

module.exports = route
