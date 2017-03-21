const S3 = require('aws-sdk/clients/s3')
const crypto = require('crypto')

const s3 = new S3({signatureVersion: 'v4'})

const bucketName = process.env.BUCKET_NAME || 'berkeley-homes-near-miss'

// https://github.com/dwyl/image-uploads
const generateKeyName = (data, ext) =>
  `${crypto.createHash('sha1').update(data).digest('hex')}${ext}`

/* istanbul ignore next */
const put = (data, keyName, cb) => {
  const params = { Bucket: bucketName, Key: keyName, Body: data }

  s3.putObject(params, cb)
}

/* istanbul ignore next */
const get = (keyName, cb) => {
  const params = { Bucket: bucketName, Key: keyName }

  s3.getObject(params, cb)
}

module.exports = {
  generateKeyName,
  get,
  put
}
