'use strict';

const logger = require('./logger.js');
const events = require('./events.js');

const commands = {};

/**
 *
 *
 * @param {*} data
 * @param {*} userId
 * @param {*} socketPool
 */
commands['@all'] =  (data, userId, socketPool) => {
  for( let connection in socketPool ) {
    let user = socketPool[connection];
    user.socket.write(`<${socketPool[userId].nickname}>: ${data.payload}\n`);
  }
};

/**
 *
 *
 * @param {*} data
 * @param {*} userId
 * @param {*} socketPool
 */
commands['@nick'] =  (data, userId, socketPool) => {
  socketPool[userId].nickname = data.target;
};

/**
 *
 *
 * @param {*} data
 * @param {*} userId
 * @param {*} socketPool
 */
commands['@quit'] = (data, userId, socketPool) => {
  socketPool[userId] = null;
};

/**
 *
 *
 * @param {*} data
 * @param {*} userId
 * @param {*} socketPool
 */
commands['@list'] = (data, userId, socketPool) => {
  // console.log(chatroom.socketArr);
};

/**
 *
 *
 * @param {*} data
 * @param {*} userId
 * @param {*} socketPool
 */
commands['@dm'] = (data, userId, socketPool) => {
  for(let connection in socketPool){
    let user = socketPool[connection];
    if(user.nickname === data.target){
      user.socket.write(`<<<${socketPool[userId]}.nickname>>> ${data.message}\n`);
    }
  }
};

events.on('@dm', commands['@dm']);

module.exports = {commands};