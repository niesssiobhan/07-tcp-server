![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## TCP Server

### Author: Siobhan Niess

### Links and Resources
* [repo](https://github.com/niesssiobhan/07-tcp-server)
* [travis](https://travis-ci.com/niesssiobhan/07-tcp-server)
* [server](https://git.heroku.com/niess-lab-07.git)

### Modules
#### `command.js`
#### `events.js`
#### `index.js`
#### `parse-buffer.js`
#### `socket.js`
#### `chatroom.js`
#### `socket-pool.js`
##### Exported Values and Methods

### Collaborators
* Becca (helped me later on the side)

### Setup
#### `.env` requirements
* `PORT` - 3001

#### Running the app
* In your termail you will first run `node chatroom.js`
* Open up either a new tab or a window to run `nc localhost 3001`
* In that same tab from running localhost run `@nick <nickname>` in your terminal 
* Then you will send a message to multiple peopel by running `@all <message>` in your terminal
* For individual users you will run `@dm <username> <message>` in your terminal 

#### Tests
* How do you run tests?
By using npm run test -watch
* What assertions were made?
* What assertions need to be / should be made?