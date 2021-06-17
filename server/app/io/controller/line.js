'use strict';

const cacheService = require('../../extend/helper').cacheService;

module.exports = app => {
  class LineController extends app.Controller {
    async getCache() {
      await cacheService('line', this);
    }
  }
  return LineController;
};
