/**
 * Module requirements.
 */

var Socket = require('../engine.io-client/lib/socket');

/**
 * Exports the constructor.
 */

module.exports = ReliableSocket;

/**
 * Reliable socket constructor.
 *
 * @api public.
 */

function ReliableSocket(uri, opts) {
  Socket.call(this, uri, opts);
}

/**
 * Inherits from Socket.
 *
 * @api public.
 */

ReliableSocket.prototype.__proto__ = Socket.prototype;

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

ReliableSocket.ReliableSocket = ReliableSocket;

/**
 * Overrides setTransport to change onError behavior.
 *
 * @api private
 */

ReliableSocket.prototype.setTransport = function(transport) {
  var self = this;
  Socket.prototype.setTransport.call(this, transport);
  // overwrite the transport.on('error') call
  transport.on('error', function (e) {
    self.open();
  });
}
