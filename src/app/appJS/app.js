url = "http://mylogger.io/log";
// function sayHello(name){
//     console.log('hello ' + name);
//     console.log(module);
// }

function log(message){
    console.log(message);
    console.log(module);
}


module.exports.log = log;
module.exports.endPointURL = url;
log('ghanoooge')
