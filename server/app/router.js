'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { io } = app;
  // socket.io
  io.of('/').route('home', io.controller.home.getCache);
};
