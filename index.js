const { Client } = require('@elastic/elasticsearch');
const { AWSConnection } = require('./AWSConnection');

class AWSElasticSearchClient extends Client {
    constructor(opts) {
        super({
            ...opts,
            Connection: AWSConnection
        })
    }
}

module.exports = { AWSElasticSearchClient };