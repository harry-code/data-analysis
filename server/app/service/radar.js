'use strict';
const Service = require('egg').Service;

class radar extends Service {
  async index() {
    const { app } = this;
    return await app.mysql.select('radar');
  }
}
module.exports = radar;
