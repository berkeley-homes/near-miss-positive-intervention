require('env2')('.env')
const aws = require('aws-sdk')

aws.config.region = 'eu-west-1'

/* istanbul ignore next */
const createSes = () => new aws.SES({ apiVersion: '2010-12-01' })

const emailOpts = (subject, html) => ({
  Source: process.env.EMAIL_SENDER_ADDRESS,
  Destination: { ToAddresses: [process.env.EMAIL_RECIPIENT_ADDRESS] },
  Message: {
    Subject: { Data: subject },
    Body: { Html: { Data: html } }
  }
})

const sendEmail = (ses, payload, cb) => {
  const { reportType, emailHtml } = payload

  ses.sendEmail(emailOpts(reportType, emailHtml), err => {
    if (err) return cb(err)

    cb(null, payload)
  })
}

module.exports = {
  sendEmail,
  createSes
}
