const { AWSConnection } = require('./Connection');
const { Client } = require('@elastic/elasticsearch');
const AWS = require('aws-sdk');

AWS.config.update({
    credentials: new AWS.Credentials({
        accessKeyId: '***',
        secretAccessKey: '***',
    }),
    region: '***',
})

const client = new Client({
    node: '***',
    Connection: AWSConnection
});

client.search({
    index: '****',
    body: { query: { match_all: {} } }
}).then(res => console.log(res.body.hits.hits[0]));