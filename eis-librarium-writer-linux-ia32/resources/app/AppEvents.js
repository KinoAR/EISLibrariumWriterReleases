const EventEmitter = require("events");
const deleteEvent = new EventEmitter();
const createEvent = new EventEmitter();
global.deleteEvent = deleteEvent;
global.createEvent = createEvent;
exports.deleteEvent = global.deleteEvent;
exports.createEvent = global.createEvent;