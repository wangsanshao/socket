const http = require('http');
const path = require('path');
const { readFile } = require('./utils.js');
const { Server } =  require('socket.io');


const getHomeRoute = (req, res) => {
  const absolutePath = path.join(__dirname,path.resolve('/index.html'))
  readFile(absolutePath, (data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  })
}


const httpServer = http.createServer((req, res) => {
  console.log(req.url);
  if(req.url === '/') {
    getHomeRoute(req, res);
  } else {
    res.end();
  }
});

const io = new Server(httpServer);

io.on('connection', (socket) => {
  console.log('一个用户连接到服务');
  socket.on('chat message', (msg) => {
    console.log('msg', msg);
  })

  socket.on('disconnect', () => {
    console.log('一个用户断开连接')
  })
})

httpServer.listen(2999, () => {
  console.log('服务器已经启动 127.0.0.1:2999')
});
