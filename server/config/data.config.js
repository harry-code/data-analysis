'use strict';
module.exports = {
  mysql: {
    // database configuration
    client: {
      host: '121.5.46.135',
      port: '3306',
      user: 'root',
      password: 'liuyao0131ly',
      database: 'data-anlysis',
    },
    // load into app, default true
    app: true,
    // load into agent, default false
    agent: false,
  },
  redis: {
    client: {
      port: 6379,
      host: '121.5.46.135',
      password: '123456',
      db: 0,
    },
  },
  updateTime: 10000, // websocket页面数据更新时间间隔,单位毫秒
  cacheTime: 30000, // 数据库缓存到redis时间间隔,单位毫秒
};
