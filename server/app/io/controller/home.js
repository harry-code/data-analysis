'use strict';

const cacheService = require('../../extend/helper').cacheService;

module.exports = app => {
  class HomeController extends app.Controller {
    async getCache() {
      await cacheService('home', this);
    }
  }
  return HomeController;
};
