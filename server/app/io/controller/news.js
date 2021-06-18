'use strict';

const cacheService = require('../../extend/helper').cacheService;

module.exports = app => {
  class NewsController extends app.Controller {
    async getCache() {
      await cacheService('news', this);
    }
  }
  return NewsController;
};
