const eventemitter = require("events");
const EventEmitter = new eventemitter();

EventEmitter.on("start", () => {
  console.log("started");
});

EventEmitter.emit("start", 23);
