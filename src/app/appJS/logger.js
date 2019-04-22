



const EventEmitter = require('events');

 class MyEmitter extends EventEmitter {
      log(msg) {
        console.log(msg);
        this.emit('message Logged' ,{id: 1, url: 'http://'})

    }
}

module.exports = MyEmitter;
