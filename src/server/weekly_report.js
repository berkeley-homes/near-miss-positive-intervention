const fs = require('fs')
const path = require('path')
const handlebars = require('handlebars')

const templatePath = path.join(
  __dirname,
  'handlebars',
  'views',
  'weekly_email.html'
)

const renderEmail = handlebars.compile(fs.readFileSync(templatePath, 'utf8'))

// sendEmail = SES
// getWeeklyReportData = see model/queries.js
const weeklyReport = (sendEmail, getWeeklyReportData, site, location) => {
  const queryArgs = [site, location]


  getWeeklyReportData((error, response) => {
    if (error) {
      console.error(error)
      return sendEmail(
        {
          reportType: 'Error building weekly email',
          emailHtml: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>error sending weekly report</title>
          </head>
          <body>
            <h1> Error sending weekly summary </h1>
            <p> please forward this email to edfmccarthy@gmail.com </p>
            <p>${error}</p>
          </body>
        </html>`,
          locationFirst: location,
          site
        },
        () => {}
      )
    }

    sendEmail(
      {
        reportType: 'Weekly summary email',
        emailHtml: renderEmail({
          reports: response.rows
        }),
        locationFirst: location,
        site
      },
      err => {
        if (err) {
          console.log('email sending failed!')
          return console.error(error)
        }

      }
    )
  }, queryArgs)
}

module.exports = weeklyReport
