'use strict';

// First Party Modules
const net = require('net');

// Third Party Modules
const uuid = require('uuid/v4');

const port = process.env.PORT || 3001;
const server = net.createServer();
const socketPool = {};
const commands = {};

// Local Modules
const app = require('./app.js');
const events = require('./modules/events.js');
const logger = require('./modules/logger.js');

let socketArr = {};

server.on('connection', (socket) => {
  let id = uuid();
  socketPool[id] = {
    id: id,
    nickname: `User-${id}`,
    socket: socket,
  };
  socketArr['newId'] = socketPool[id].id;
  socket.on('data', (buffer) => events.emit('emitting-socket', buffer, id, socketPool, socketArr));
});

events.on('quit', quitServer);

function quitServer(data, userId, socketPool) {
  server.close('connection', (cb) => {
   cb (console.log('the user has left'));
  });
}
server.listen(port, () => {
  console.log(`chat server is up on ${port}`);
});

module.exports = {server, socketArr};