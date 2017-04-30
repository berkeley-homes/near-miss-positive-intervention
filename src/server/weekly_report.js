const fs = require('fs')

const { getSes, sendEmail } = require('./model/email.js')
const handlebars = require('handlebars')

const date = new Date()
const day = data.getDay()

if (!(day % 7)) {
  const ses = getSes()
  const templatePath = path.join(__dirname, 'templates')
  const templateSource = fs.readFileSync(path)

  sendEmail(ses)
}
