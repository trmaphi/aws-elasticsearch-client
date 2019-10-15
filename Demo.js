require('dotenv').config();
const AWS = require('aws-sdk');
const { AWSElasticSearchClient } = require('./index');

AWS.config.update({
    credentials: new AWS.SharedIniFileCredentials({ profile: process.env.profile }),
    region: process.env.region,
})

const client = new AWSElasticSearchClient({
    node: process.env.node,
});

client.search({
    index: process.env.index,
    body: { query: { match_all: {} } }
})
    .then(res => console.log(res.body.hits.hits))
    .catch(err => console.error(err));