const server = require('./server')
const cron = require('node-cron')

const weeklyReport = require('./weekly_report.js')

server.start(error => {
  if (error) throw error
  server.plugins.model.init((error) => {
    if (error) throw error

    cron.schedule('59 22 * * 7', function () {
      weeklyReport(server.plugins.model.sendEmail, server.plugins.model.weekly)
    })

    console.log(`server started on port ${server.info.port}`)
  })
})
