const test = require('tape')
const path = require('path')

const { parsePhotoData } = require('../../../src/server/model/image.js')

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
