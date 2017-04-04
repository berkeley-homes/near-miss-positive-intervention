const test = require('tape')
const path = require('path')
const { createAsyncSpy } = require('../../helpers/spy.js')

const { parsePhotoData, put } = require('../../../src/server/model/image.js')

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

test('model/image: put', t => {
  const { calls, spy } = createAsyncSpy()
  const s3 = { putObject: spy }
  const data = 'data'
  const keyName = 'key name'
  put(s3, data, keyName, (error) => {
    t.error(error, 'no error')
    t.deepEqual(
      calls,
      [ [ {
        Body: data,
        Bucket: 'berkeley-homes-near-miss',
        Key: keyName
      } ] ],
      'correct call to s3'
    )
    t.end()
  })
})
