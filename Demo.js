require('dotenv').config();
const { AWSConnection } = require('./AWSConnection');
const { Client } = require('@elastic/elasticsearch');
const AWS = require('aws-sdk');

AWS.config.update({
    credentials: new AWS.SharedIniFileCredentials({ profile: process.env.profile }),
    region: process.env.region,
})

const client = new Client({
    node: process.env.node,
    Connection: AWSConnection
});

client.search({
    index: process.env.index,
    body: { query: { match_all: {} } }
})
    .then(res => console.log(res.body.hits.hits))
    .catch(err => console.error(err));