const Subscription = require('egg').Subscription;

class KeywordsDriver extends Subscription {
    static get schedule() {
        return {
            cron: '0 25 0/1 * * ?',
            type: 'worker'
        };
    }
    async subscribe() {
        console.log("parse keywords OK")
        await this.ctx.service.keywords.start();
    }
}

module.exports = KeywordsDriver;