'use strict';

const logger = require('./modules/logger.js');
const events = require('./modules/events.js');

module.exports = {parse, dispatchAction};

events.on('emitting-socket', dispatchAction);

function dispatchAction(buffer, userId, socketPool) {
  parse(buffer, userId, socketPool);
}

function parse(buffer, userId, socketPool) {
  events.emit('parse-buffer', buffer, userId, socketPool);
}

module.exports = {dispatchAction, parse};
