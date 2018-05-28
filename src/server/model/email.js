require('env2')('.env')
const aws = require('aws-sdk')
const Papa = require('papaparse')

aws.config.region = 'eu-west-1'

const emails = [
  'city-road',
  'goodmans-fields',
  'woodberry-down',
  'trent-park',
  'kss4',
  'd',
  'f'
]

/* istanbul ignore next */
const createSes = () => new aws.SES({ apiVersion: '2010-12-01' })

const emailOpts = (subject, html, location, site) => {
  let emailExtension
  if (location && emails.includes(location.toLowerCase())) {
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



  // workflow for sending out the weekly CSV
  if (payload && payload.emailType) {
    const location = payload.locationFirst
    const site = payload.site
    let emailExtension
    if (location && emails.includes(location.toLowerCase())) {
      emailExtension = location.toLocaleLowerCase()
    } else if (emails.includes(site.toLocaleLowerCase())) {
      emailExtension = site.toLowerCase()
    }
    const fullToEmail = `${process.env
      .EMAIL_RECIPIENT_ADDRESS}+${emailExtension}@gmail.com`
    var csvContent = Papa.unparse(payload.response)
    const fileName = new Date().toISOString().split('T')[0] + '.csv'
    console.log(csvContent, 'csvContent')
    var sesMail = "From:<" + `${process.env.EMAIL_SENDER_ADDRESS}` + ">\n"
    sesMail = sesMail + "To: " + fullToEmail + "\n"
    sesMail = sesMail + "Subject: Weekly Report Summary for \n"
    sesMail = sesMail + "MIME-Version: 1.0\n"
    sesMail = sesMail + "Content-Type: multipart/mixed; boundary=\"NextPart\"\n\n"
    sesMail = sesMail + "--NextPart\n"
    sesMail = sesMail + "Content-Type: text/html; charset=us-ascii\n\n"
    sesMail = sesMail + "The CSV file attached in this email contains all the reports for this week. If the CSV is empty then you have received no reports for this week.\n\n"
    sesMail = sesMail + "--NextPart\n"
    sesMail = sesMail + "Content-Type: text/csv\n"
    sesMail = sesMail + "Content-Disposition: attachment; filename=\"" + fileName + "\"\n\n"
    sesMail = sesMail + csvContent + "\n\n"
    sesMail = sesMail + "--NextPart--"

    var params = {
      RawMessage: { Data: new Buffer(sesMail) },
      Destinations: [fullToEmail],
      Source: process.env.EMAIL_SENDER_ADDRESS
    };

    ses.sendRawEmail(params, function (err, data) {
      if (err) {
        console.log(err);
      }
      else {
        console.log(data);
      }
    });
  }

  // normal email workflow caught here
  else {
    ses.sendEmail(
      emailOpts(reportType, emailHtml, payload.locationFirst, payload.site),
      err => {
        if (err) return cb(err)

        cb(null, payload)
      }
    )
  }


}

module.exports = {
  sendEmail,
  createSes
}
