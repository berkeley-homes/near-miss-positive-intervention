const test = require('tape')
const path = require('path')
const { createAsyncSpy } = require('../../helpers/spy.js')

const { parsePhotoData, saveImage } = require('../../../src/server/model/image.js')

test('generate nameKey for s3', t => {
  const mockData = 'data:image/png;base64,iVBO'
  const { photoS3Key, buffer } = parsePhotoData(mockData)

  t.equal(
    path.extname(photoS3Key),
    '.png',
    'key has correct extension'
  )
  t.equal(
    path.basename(photoS3Key, '.png').length,
    40,
    'extracted from photoS3Key hash is correct length'
  )
  t.equal(buffer.length, 3, 'get a buffer of length 3 back')

  t.throws(
    () => parsePhotoData('bad data'),
    /Invalid input string/,
    'throws for bad input'
  )

  t.end()
})

test('model/image: saveImage', t => {
  const { calls, spy } = createAsyncSpy()
  const s3 = { putObject: spy }
  const mockData = 'data:image/png;base64,iVBO'

  const { buffer, photoS3Key } = parsePhotoData(mockData)
  const payload = {
    photo: mockData
  }

  saveImage(s3, payload, (error, payload) => {
    t.error(error, 'no error')
    t.deepEqual(
      calls,
      [ [ {
        ACL: 'public-read',
        Body: buffer,
        Bucket: 'berkeley-homes-near-miss',
        Key: photoS3Key
      } ] ],
      'correct call to s3'
    )
    t.ok(payload.photoUrl, 'url passed to cb')

    t.end()
  })
})
