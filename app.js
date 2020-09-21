const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hi!");
});

const server = app.listen(3000, () => console.log("Server Runing..."));

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Server closed");
  });
});
