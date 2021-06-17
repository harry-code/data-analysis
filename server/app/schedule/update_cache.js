'use strict';
const cacheTime = require('../../config/data.config').cacheTime;
const NAMESPACES = [
  'pie',
  'line',
  'bar',
  'radar',
];
async function setCache({ app, service }) {
  for (const name of NAMESPACES) {
    // console.log(name);
    const res = await service[name].index();
    await app.redis.set(name, JSON.stringify(res));
  }
}
module.exports = {
  schedule: {
    interval: cacheTime, // 间隔时间,毫秒
    type: 'all', // 指定所有的 worker 都需要执行
    immediate: true,
  },
  async task(ctx) {
    console.log('cache begin...');
    await setCache(ctx);
    console.log('cache end...');
  },
};
