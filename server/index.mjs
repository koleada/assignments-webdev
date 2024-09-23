// 9-19 first node example 

// this is a little thing to create a webserver w/ node. The node version of hello world if you will. 
// server.mjs

import { createServer } from 'node:http';

const PORT = 3000;

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});
// starts a simple http server locally on port 3000
server.listen(PORT, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
// run with `node server.mjs`