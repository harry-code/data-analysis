'use strict';

const cacheService = require('../../extend/helper').cacheService;

module.exports = app => {
  class PieController extends app.Controller {
    async getCache() {
      await cacheService('pie', this);
    }
  }
  return PieController;
};
