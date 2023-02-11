const { Pool } = require("pg");

const config = {
  user: process.env.PG_USER,
  password: process.env.PG_PASS,
  database: process.env.PG_DB,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  table: "test",
};

const pgClient = new Pool(config);
pgClient.connect((error, client, release) => {
  client.on("error", (err) => {
    console.log(error, err);
  });

  client.on("notification", ({ payload }) => {
    console.log(payload);
    pgClient.emit("notification_", payload);
  });

  client.query("LISTEN new_log");
});

module.exports = pgClient;
