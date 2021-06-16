'use strict';

// had enabled by egg
// exports.static = true;
exports.oracle = {
  enable: true,
  package: 'egg-mysql',
};
exports.redis = {
  enable: true,
  package: 'egg-redis',
};
exports.io = {
  enable: true,
  package: 'egg-socket.io',
};
