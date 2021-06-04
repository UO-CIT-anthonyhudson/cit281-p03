const http=require('http');
const fs = require('fs');
const hostname='127.0.0.1';
const port=8080;
const { coinCount } = require ('./p3-module.js')


const fastify = require('fastify')();
fastify.get("/", (request, reply) => {
    fs.readFile(`${__dirname}/index.html`, (err, data) => {
        if (err){
            reply.code(500)
            .header("content-Type:", "text/html")
            .send("<h1>Error</h1>")
        } else{
            reply.code(200)
            .header("content-Type", "text/html")
            .send(data);
        }
    })
});

fastify.get("/coin", (request, reply) => {
    let { denom = 0, count = 0 } = request.query;
    let coinValue = coinCount([{denom,  count}]);
    reply
        .code(200)
        .header("content-Type:", "text/html; charset=utf-8")
        .send(`<h2>Value of ${count} of ${denom} is ${coinValue}</h2><br /><a href="/">Home</a>`);
});

fastify.get("/coins", (request, reply) => {
    const coins = [{denom: 25, count: 2}, {denom: 1, count: 7}];
    let coinValue = 0
    let {option} = request.query;
    switch (option) {
        case "1":
            coinValue = coinCount([{denom: 5, count: 3}, {denom: 10, count: 2}]);
    break;
        case "2": 
            coinValue = coinCount([...coins]);
    break;
    }
    reply
        .code(200)
        .header("content-Type:", "text/html; charset=utf-8")
        .send(`<h2>Option ${option} value is ${coinValue}</h2><br /><a href="/">Home</a>`)
});
    
// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});



//console.log(coinCount({denom: 5, count: 3}, {denom: 10, count: 2}))
