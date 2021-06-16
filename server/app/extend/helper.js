'use strict';
const updateTime = require('../../config/data.config').updateTime;

async function cacheService(apiName, thisPage, isNew = true) {
  let res = {};
  const { ctx, app } = thisPage;
  const socket = ctx.socket;
  const client = socket.id; // 客户端id
  const clientStuts = await app.redis.get(client); // 储存中的api名称
  const currentNAMESPACE = await app.redis.get(`${client}_NAMESPACE`); // 当前执行中的api名称
  // console.log('socket emit ', currentNAMESPACE, apiName, client);
  // 若当前执行中的api和将要执行的相同则放弃，且
  if (isNew && clientStuts === 'online' && currentNAMESPACE !== apiName) {
    await app.redis.set(`${client}_NAMESPACE`, apiName, 'ex', 2678400);
    res = await app.redis.get(apiName);
    socket.emit(apiName, JSON.parse(res));
    setTimeout(async () => {
      cacheService(apiName, thisPage, false);
    }, updateTime);
  } else if (
    !isNew &&
    currentNAMESPACE === apiName &&
    clientStuts === 'online'
  ) {
    res = await app.redis.get(apiName);
    socket.emit(apiName, JSON.parse(res));
    setTimeout(async () => {
      cacheService(apiName, thisPage, false);
    }, updateTime);
  }
}

module.exports = { cacheService };
