'use strict';

const cacheService = require('../../extend/helper').cacheService;

module.exports = app => {
  class BarController extends app.Controller {
    async getCache() {
      await cacheService('bar', this);
    }
  }
  return BarController;
};
