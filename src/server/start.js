const server = require("./server");
const cron = require("node-cron");

const weeklyReport = require("./weekly_report.js");

const emails = [
  {
    site: "goodmans-fields"
  },
  { site: "woodberry-down", location: "kss4" },
  { site: "woodberry-down", location: "d" },
  { site: "woodberry-down", location: "f" },
  {
    site: "city-road"
  }
];

server.start(startErr => {
  if (startErr) throw startErr;

  server.plugins.model.init(modelErr => {
    if (modelErr) throw modelErr;

    cron.schedule("* * * * *", () => {
      emails.forEach(({ site, location }) => {
        console.log("hello " + site);
        weeklyReport(
          server.plugins.model.sendEmail,
          server.plugins.model.weekly,
          site,
          location
        );
      });
    });

    console.log(`server started on port ${server.info.port}`);
  });
});
