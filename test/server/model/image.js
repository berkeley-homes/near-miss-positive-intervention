const test = require('tape')
const path = require('path')

const { parsePhotoData } = require('../../../src/server/model/image.js')

test('generate nameKey for s3', t => {
  const mockData = 'data:image/png;base64,iVBO'
  const { keyName, buffer } = parsePhotoData(mockData)

  t.equal(
    path.extname(keyName),
    '.png',
    'key has correct extension'
  )
  t.equal(
    path.basename(keyName, '.png').length,
    40,
    'extracted from keyName hash is correct length'
  )
  t.equal(buffer.length, 3, 'get a buffer of length 3 back')

  t.throws(
    () => parsePhotoData('bad data'),
    /Invalid input string/,
    'throws for bad input'
  )

  t.end()
})
