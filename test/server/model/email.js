const test = require('tape')
const { createAsyncSpy } = require('../../helpers/spy.js')

const { sendEmail } = require('../../../src/server/model/email.js')

test('model/email: sendEmail', t => {
  const { calls, spy } = createAsyncSpy()
  const ses = { sendEmail: spy }

  const reportType = 'near miss'
  const emailHtml = 'some html'
  const payload = {
    reportType,
    emailHtml
  }
  sendEmail(ses, payload, (error, payload) => {
    t.error(error, 'no error')
    t.equal(calls.length, 1, 'one call made to ses')

    const message = calls[0][0].Message
    t.deepEqual(
      message.Subject,
      { Data: 'near miss' },
      'correct email url'
    )
    t.deepEqual(
      message.Body,
      { Html: { Data: 'some html' } },
      'correct email body'
    )

    t.end()
  })
})
