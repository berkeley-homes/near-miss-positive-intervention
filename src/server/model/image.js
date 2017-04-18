const S3 = require('aws-sdk/clients/s3')
const url = require('url')
const cuid = require('cuid')

const bucketName = process.env.BUCKET_NAME || 'berkeley-homes-near-miss'

const getUrl = key => {
  return url.format({
    protocol: 'https',
    host: 's3.eu-west-2.amazonaws.com',
    pathname: `/${bucketName}/${encodeURIComponent(key)}`
  })
}

/* istanbul ignore next */
const createS3 = (region = 'eu-west-2') =>
  new S3({ signatureVersion: 'v4', region })

const generateSignedUrl = (s3, payload, cb) => {
  const { photoExt } = payload
  const photoKey = `${cuid()}.${photoExt}`
  var params = {
    ACL: 'public-read',
    Bucket: bucketName,
    Key: photoKey
  }

  s3.getSignedUrl('putObject', params, function (err, s3PutUrl) {
    if (err) return cb(err)

    cb(null, Object.assign({}, payload, { s3PutUrl, photoKey }))
  })
}

module.exports = {
  createS3,
  generateSignedUrl,
  getUrl
}
