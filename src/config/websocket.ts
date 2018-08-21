export const WEBSOCKET_SERVER_URL = `ws://43.239.221.117:20001/ws`;

export const SOCKETIO_SERVER_URL = `http://43.239.221.117:20003`;
export const SOCKETIO_CONFIGURATIONS = {
  pingTimeout: 30000,
  pingInterval: 30000,
  transports: ['websocket'],
  forceNew: true,
  reconnection: true
};
