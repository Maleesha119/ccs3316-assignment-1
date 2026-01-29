const http = require('http');

const PORT = 8080;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK');
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from CCS3316 Assignment 1!\nYour Name: Maleesha Viraj');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
