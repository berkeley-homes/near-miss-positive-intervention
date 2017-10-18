require('env2')('.env')
const aws = require('aws-sdk')

aws.config.region = 'eu-west-1'

const emails = [
  'city-road',
  'goodmans-fields',
  'woodberry-down',
  'kss4',
  'd',
  'f'
]

/* istanbul ignore next */
const createSes = () => new aws.SES({ apiVersion: '2010-12-01' })

const emailOpts = (subject, html, location, site) => {
  let emailExtension
  if (emails.includes(location.toLowerCase())) {
    emailExtension = location.toLocaleLowerCase()
  } else if (emails.includes(site.toLocaleLowerCase())) {
    emailExtension = site.toLowerCase()
  }
  const fullToEmail = `${process.env
    .EMAIL_RECIPIENT_ADDRESS}+${emailExtension}@gmail.com`
  return {
    Source: process.env.EMAIL_SENDER_ADDRESS,
    Destination: {
      ToAddresses: [fullToEmail]
    },
    Message: {
      Subject: { Data: subject },
      Body: { Html: { Data: html } }
    }
  }
}

const sendEmail = (ses, payload, cb) => {
  const { reportType, emailHtml } = payload
  ses.sendEmail(
    emailOpts(reportType, emailHtml, payload.locationFirst, payload.site),
    err => {
      if (err) return cb(err)

      cb(null, payload)
    }
  )
}

module.exports = {
  sendEmail,
  createSes
}
