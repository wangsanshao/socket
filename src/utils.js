const fs = require('fs');

module.exports = {
  readFile: (src, callback) => {
    let data = '';
    const readerStream = fs.createReadStream(src);
    readerStream.setEncoding('utf-8');
    readerStream.on('data', (chunk) => {
      data += chunk;
    })
  
    readerStream.on('end', () => {
      callback && callback(data)
    })
  }
} 