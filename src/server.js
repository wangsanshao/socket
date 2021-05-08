const http = require('http');
const server = http.createServer();
const io = require('socket.io')(server);

io.on('connection', client => {
  client.on('event', data=> {
    console.log(data)
  });

  client.on('disconnect', () => {

  })
})

server.listen(3111);