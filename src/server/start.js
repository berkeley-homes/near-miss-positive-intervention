const server = require('./server')
const cron = require('node-cron')

const weeklyReport = require('./weekly_report.js')

const emails = [
  {
    site: 'goodmans-fields'
  },
  { site: 'woodberry-down', location: 'kss4' },
  { site: 'woodberry-down', location: 'd' },
  { site: 'woodberry-down', location: 'f' },
  {
    site: 'city-road'
  },
  {
    site: 'trent-park'
  }
]

server.start(startErr => {
  if (startErr) throw startErr

  server.plugins.model.init(modelErr => {
    if (modelErr) throw modelErr

    cron.schedule('0 0 * * 0', () => {
      emails.forEach(({ site, location }) => {
        weeklyReport(
          server.plugins.model.sendEmail,
          server.plugins.model.weekly,
          site,
          location
        )
      })
    })

    console.log(`server started on port ${server.info.port}`)
  })
})
