'use strict';

const httpServer = require('http-server');
const socketEmitter = require('chokidar-socket-emitter');

const port = process.argv[2] || 8090;

const server = httpServer.createServer({
  cache: -1,
  root: './',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
  },
});

socketEmitter({ app: server.server });

server.listen(port);
console.log(`http://localhost:${ port }`);
