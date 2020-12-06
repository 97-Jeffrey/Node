
const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files);

fs.readdir('$', (err, files)=>{
  if(err) console.log("error ", err);
  else console.log("result" , files);
})

const EventEmitter = require('events');
// const emitter = new EventEmitter();



const Logger = require('./logger');
const logger = new Logger(); 

logger.on("messageLogged", (arg)=>{
  console.log("listener called", arg)
})

logger.log('message');


const http = require('http');
const server = http.createServer((req, res)=>{
  if(req.url ==="/"){
    res.write("hello world");
    res.end();
  }
  if(req.url === "/api/courses"){
    res.write(JSON.stringify([1,2,3]));
    res.end();
  }
});



server.listen(3000);

console.log("listening on Port 3000...")