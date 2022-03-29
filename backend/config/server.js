const cronTasks = require("@webbio/strapi-plugin-scheduler/cron-task");
module.exports = ({ env }) => ({
  host: env("HOST", "localhost"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS", env("STRAPI_APP_KEYS", ["secret", "key"])),
  },
  cron: {
    enabled: true,
    tasks: cronTasks,
  },
});
