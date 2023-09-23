const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('Waterfull', () => {
  console.log('Please switch off the motor.!!');
  setTimeout(() => {
    console.log('Please switch off the motor.!!, Gentle Reminder.');
  }, 2000);
});
myEmitter.emit('Waterfull');
console.log("Script is still Running.");