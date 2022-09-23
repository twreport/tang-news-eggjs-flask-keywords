'use strict';
const Service = require('egg').Service;

class KeywordsService extends Service {
    async start() {
        const { ctx } = this;
        await this.keywordsDriver();
    }

    // 定时执行分析关键词的任务
    async keywordsDriver() {
        const scrapyd_server_url = this.app.config.AiServerUrl;
        // 拼接curl地址
        const url = scrapyd_server_url + "ai/keywords/parse";
        const result = await this.ctx.curl(
            url, {
            method: 'GET'
        }
        );
        console.log(result)
    }
}
module.exports = KeywordsService;