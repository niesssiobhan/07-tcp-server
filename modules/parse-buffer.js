'use strict';

const events = require('./events.js');

module.exports = {parseBuffer};

events.on('parse', parseBuffer);

/**
 *
 *
 * @param {*} buffer
 * @param {*} userId
 * @param {*} socketPool
 * @returns
 */

function parseBuffer(buffer, userId, socketPool){
  console.log('inside parseBuffer');
  let text = buffer.toString().trim();
  if ( !text.startsWith('@') ) { return null; }
  // eslint-disable-next-line indent
  let [command,payload] = text.split(/\s+(.*)/);
  
  let [target,message] = payload.split(/\s+(.*)/);
  console.log( {command,payload,target,message});
  events.emit('send-parsed', {command,payload,target,message}, userId, socketPool);
  return {command,payload,target,message};
}