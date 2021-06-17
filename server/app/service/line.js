'use strict';
const Service = require('egg').Service;

class line extends Service {
  async index() {
    const { app } = this;
    return await app.mysql.select('line');
  }
}
module.exports = line;
