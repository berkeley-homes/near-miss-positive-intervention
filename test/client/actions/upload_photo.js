const test = require('tape')

const { SET_PHOTO } = require('../../../src/client/action_types.js')
const { setPhoto } = require('../../../src/client/actions/upload_photo.js')

test('set photo action creator', t => {
  const photoData = 'photo data'
  const action = setPhoto(photoData)

  t.deepEqual(
    action,
    { type: SET_PHOTO, photoData },
    'correct object created'
  )

  t.end()
})
