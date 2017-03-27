const S3 = require('aws-sdk/clients/s3')
const crypto = require('crypto')

const s3 = new S3({signatureVersion: 'v4'})

const bucketName = process.env.BUCKET_NAME || 'berkeley-homes-near-miss'

const parsePhotoData = (dataString) => {
  var matches = dataString.match(/^data:([A-Za-z-+/]+);base64,(.+)$/)

  if (!matches || (matches && matches.length !== 3)) {
    throw new Error('Invalid input string')
  }

  const buffer = new Buffer(matches[2], 'base64')
  const hash = crypto.createHash('sha1').update(buffer).digest('hex')
  const keyName = `${hash}.${matches[1].split('/')[1]}`

  return { keyName, buffer }
}

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
  parsePhotoData,
  get,
  put
}
