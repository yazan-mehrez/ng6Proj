

// const EventEmitter = require('events');
// const emitter = new EventEmitter();
const MyEmitter = require('./logger');

const logger = new MyEmitter();

logger.on('messageLogged' , function (arg) {
    console.log('listener is called' , arg);
});

logger.log('messageLogged');

