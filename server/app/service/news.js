'use strict';
const Service = require('egg').Service;

class news extends Service {
  async index() {
    const { app } = this;
    return await app.mysql.select('news');
  }
}
module.exports = news;
