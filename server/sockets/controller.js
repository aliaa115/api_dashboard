// const { createAdapter } = require("@socket.io/postgres-adapter");

const pgClient = require("../db/connectPG");

const socketController = (socket) => {
  console.log("conected");

  pgClient.on("notification_", (payload, callback) => {
    // callback({ ok: true, payload });
    socket.emit("notification", payload);
  });
  // socket.adapter.clients((err, client) => {
  //   console.log(client);
  // });
  // socket.adapter.emit("FromAPI", () => {
  //   console.log(":D");
  //   createAdapter(pgClient);
  // });
};

module.exports = { socketController };
