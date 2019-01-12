'use strict';

const app = require('../app.js');
const events = require('./events.js');
const actions = require('./commands.js');

events.on('parse-buffer', parseBuffer);
events.on('accept-buffer', dispatchCommand);

module.exports = {parseBuffer, dispatchCommand};

function parseBuffer(buffer, userId, socketPool){
  console.log('inside parseBuffer');
  let text = buffer.toString().trim();
  if ( !text.startsWith('@') ) { return null; }
  let [command,payload] = text.split(/\s+(.*)/);
  let [target,message] = payload.split(/\s+(.*)/);
  console.log( {command,payload,target,message});
  events.emit('send-parsed', {command,payload,target,message}, userId, socketPool);
}

function dispatchCommand(entry, userId, socketPool) {
  if(entry && typeof actions.commands[entry.command] === 'function') {
    actions.commands[entry.command](entry, userId, socketPool);
  }
}