'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { io } = app;
  // socket.io
  io.of('/').route('pie', io.controller.pie.getCache);
  io.of('/').route('line', io.controller.line.getCache);
  io.of('/').route('bar', io.controller.bar.getCache);
  io.of('/').route('radar', io.controller.radar.getCache);
  io.of('/').route('news', io.controller.news.getCache);
};
