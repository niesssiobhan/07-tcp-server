'use strict';

const app = require('../app.js');
const commands = require('../modules/commands.js');
const events = require('../modules/events.js');
const logger = require('../modules/logger.js');
const chatroom = require('../chatroom.js');

  describe('parse function', () =>{

    it('will take in a socketPool', () => {
      let spy = jest.spyOn(chatroom.socketPool);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('parseBuffer, function', () => {

    it('will take in a socketPool', () => {
      let spy = jest.spyOn(chatroom.socketPool);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('dispatchAction, function', () => {

    it('will take in a socketPool', () => {
      let spy = jest.spyOn(chatroom.socketPool);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('dispatchCommand, function', () => {

    it('will take in a socketPool', () => {
      let spy = jest.spyOn(chatroom.socketPool);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('dm@ action', () => {

    it('will not send anything if it is not a valid user', () => {
      let commandObject = {
        command: '@dm',
        target: 'unvalid user',
        message: 'Hello?',
      };
      logger.dm(commandObject, 1);
      expect(chatroom.socketPool.write).not.toHaveBeenCalled();
    });

    it('will send a messge if the user is valid', () => {
      let commandObject = {
        command: '@dm',
        target: 'two',
        message: 'Hello there!',
      };
      logger.dm(commandObject, 1);
      expect(chatroom.socketPool.write).toHaveBeenCalled();
  });

});