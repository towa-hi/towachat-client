const openSocket = require('socket.io-client');
const socket = openSocket('http://localhost:5000');

function attemptLogin(username, password) {
  socket.emit('login', username, password);
}
