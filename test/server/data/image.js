const test = require('tape')
const path = require('path')

const image = require('../../../src/server/data/image.js')

test('generate nameKey for s3', t => {
  const givenExt = '.txt'
  const keyName = image.generateKeyName('hello, world', givenExt)

  const ext = path.extname(keyName)
  t.equal(ext, givenExt, 'key has correct extension')

  const base = path.basename(keyName, ext)
  t.equal(base.length, 40, 'extracted from keyName hash is correct length')

  t.end()
})
