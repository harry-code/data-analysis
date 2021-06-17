'use strict';
const Service = require('egg').Service;

class pie extends Service {
  async index() {
    const { app } = this;
    return await app.mysql.select('pie');
  }
}
module.exports = pie;
