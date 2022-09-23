'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'Service "eggjs_ai_keywords" is OK!';
  }
  
  async test_keywords() {
    const { ctx } = this;
    await ctx.service.keywords.start()
  }
  async test_flykeywords() {
    const { ctx } = this;
    await ctx.service.flykeywords.start()
  }

}

module.exports = HomeController;
