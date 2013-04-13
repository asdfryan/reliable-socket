var NormalSocket = require('../engine.io/lib/socket');

module.exports = ReliableSocket;

function ReliableSocket(id, server, transport) {
  NormalSocket.call(this, id, server, transport);
}

ReliableSocket.prototype = NormalSocket.prototype;

