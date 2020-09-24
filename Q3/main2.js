const calcExpress = require('./calcExpress');
const cron = require("node-cron");
calcExpress.run();

cron.schedule("* * * * *", function() {
        calcExpress.writeLog();
  });