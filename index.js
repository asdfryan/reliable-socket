var NormalSocket = require('socket');
 
module.exports = ReliableSocket;

ReliableSocket.prototype.__proto__ = NormalSocket.prototype;

//ReliableSocket.prototype.onClose = this._receivedCloseEvent;

ReliableSocket.prototype._receivedCloseEvent = funtion (reason, desc) {
	//edit stuff here
  
}