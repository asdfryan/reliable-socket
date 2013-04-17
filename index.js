/**
 * Module requirements.
 */

var Socket = require('../engine.io/lib/socket');

/**
 * Exports the constructor.
 */

module.exports = ReliableSocket;

/**
 * Reliable socket constructor.
 *
 * @api public.
 */

function ReliableSocket(id, server, transport) {
  Socket.call(this, id, server, transport);
}

/**
 * Inherits from Socket.
 *
 * @api public.
 */

ReliableSocket.prototype.__proto__ = Socket.prototype;

/**
 * Overrides onClose to implement reliability layer.
 *
 * @api private
 */

ReliableSocket.prototype.onClose = function(reason, description) {
	if (reason == 'forced close') {
		Socket.prototype.onClose.call(this, reason, description);
	} else {
		// try to reconnect?
		// check on status of transport
		// keep it open?
	}
}