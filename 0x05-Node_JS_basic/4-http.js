// A simple server using Node's http module

const { createServer } = require('http');

const app = createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(1245);
module.exports = app;
