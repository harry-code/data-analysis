'use strict';
const myconfig = require('./data.config');
module.exports = appInfo => {
  const { mysql, redis } = myconfig;
  const config = {
    mysql,
    redis,
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1528897662588_2603';

  // add your config here
  config.middleware = [];
  config.io = {
    init: {},
    namespace: {
      '/': {
        connectionMiddleware: [ 'auth' ],
        packetMiddleware: [],
      },
    },
    redis: {
      port: 6379,
      host: '121.5.46.135',
      auth_pass: 'xxx',
      db: 0,
    },
  };
  return config;
};
