'use strict';

module.exports = () => {
  return async (ctx, next) => {
    const { socket, app } = ctx;
    const client = socket.id;
    // const query = socket.handshake.query;
    await app.redis.set(client, 'online');
    await app.redis.set(`${client}_NAMESPACE`, null);
    await next();
    // execute when disconnect.
    await app.redis.set(client, null);
    await app.redis.set(`${client}_NAMESPACE`, null);
    console.log(`${client}_NAMESPACE is disconnection!`);
  };
};
