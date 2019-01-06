'use strict';


const action = require('../modules/commands.js');
const events = require('../modules/events.js');
const index = require('../modules/index.js');
const parse = require('../modules/parse-buffer');
const socket = require('../modules/socket.js');
const chatroom = require('../chatroom.js');

describe('chat', () =>{
  describe('parse buffer', () =>{

    it('will return an object', () =>{
      let buffer = Buffer.from('hi');
      let result = parse.parseBuffer(buffer);
      expect(typeof(result)).toEqual('object');
    });

    it('the object will be returned with the command, the message, and the target', () =>{
      let buffer = Buffer.from('@list Teagan Heller');
      let result = parse.parseBuffer(buffer);
      let commandObj = {
        command: '@list',
        message: 'Heller',
        payload: 'Teagan Heller',
        target: 'Teagan',
      };
      expect(result).toEqual(commandObj);
    });

    it('if there is no message then it will be undefined', () =>{
      let buffer = Buffer.from('@list Teagan');
      let result = parse.parseBuffer(buffer);
      let commandObject = {
        command: '@list',
        message: undefined,
        payload: 'Teagan',
        target: 'Teagan',
      };
      expect(result).toEqual(commandObject);
    });
  });

  describe('@dm action', () => {
    it('will send nothing if the target user is not valide', () => {
      let commandObject = {
        command:'@dm',
        target:'none',
        message:'hi',
      };
      logger.dm(commandObject, 1);
      expect(chatroom.socketPool.write).not.toHaveBeenCalled();
    });
  
    it('will send a message if there is a valid user', () => {
      let commandObject = {
        command:'@dm',
        target:'two',
        message:'hi',
      };
      logger.dm(commandObject, 1);
      expect(chatroom.socketPool.write).toHaveBeenCalled();
    });
  });

});