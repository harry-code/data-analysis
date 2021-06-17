'use strict';

const cacheService = require('../../extend/helper').cacheService;

module.exports = app => {
  class RadarController extends app.Controller {
    async getCache() {
      await cacheService('radar', this);
    }
  }
  return RadarController;
};
