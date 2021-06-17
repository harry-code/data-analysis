'use strict';
const Service = require('egg').Service;

class bar extends Service {
  async index() {
    const { app } = this;
    return await app.mysql.select('bar');
  }
}
module.exports = bar;
