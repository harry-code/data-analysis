'use strict';
const Service = require('egg').Service;

class home extends Service {
  async index() {
    const { app } = this;
    const user = await app.mysql.select('user');
    return { user };
  }
}
module.exports = home;
