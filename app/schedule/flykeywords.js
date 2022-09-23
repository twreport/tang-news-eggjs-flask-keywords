const Subscription = require('egg').Subscription;

class FlykeywordsDriver extends Subscription {
    static get schedule() {
        return {
            cron: '0 10/30 * * * ?',
            type: 'worker'
        };
    }
    async subscribe() {
        console.log("send keywords OK")
        await this.ctx.service.flykeywords.start();
    }
}
module.exports = FlykeywordsDriver;