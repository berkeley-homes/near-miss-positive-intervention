const S3 = require('aws-sdk/clients/s3')
const crypto = require('crypto')
const url = require('url')

const bucketName = process.env.BUCKET_NAME || 'berkeley-homes-near-miss'

const parsePhotoData = (dataString) => {
  var matches = dataString.match(/^data:([A-Za-z-+/]+);base64,(.+)$/)

  if (!matches || (matches && matches.length !== 3)) {
    throw new Error('Invalid input string')
  }

  const buffer = new Buffer(matches[2], 'base64')
  const hash = crypto.createHash('sha1').update(buffer).digest('hex')
  const photoS3Key = `${hash}.${matches[1].split('/')[1]}`

  return { photoS3Key, buffer }
}

const getUrl = key => {
  return url.format({
    protocol: 'https',
    host: 's3.eu-west-2.amazonaws.com',
    pathname: `/${bucketName}/${encodeURIComponent(key)}`
  })
}

/* istanbul ignore next */
const createS3 = () => new S3({signatureVersion: 'v4'})

const saveImage = (s3, payload, cb) => {
  const { photoS3Key, buffer } = parsePhotoData(payload.photo)
  const photoUrl = getUrl(photoS3Key)
  const params = {
    ACL: 'public-read',
    Bucket: bucketName,
    Key: photoS3Key,
    Body: buffer
  }

  s3.putObject(params, err => {
    if (err) return cb(err)

    cb(null, Object.assign({}, payload, { photoUrl }))
  })
}

/* istanbul ignore next */
const get = (s3, keyName, cb) => {
  const params = { Bucket: bucketName, Key: keyName }

  s3.getObject(params, cb)
}

module.exports = {
  createS3,
  parsePhotoData,
  saveImage,
  get
  // getUrl
}
