# AWS ElasticSearch Service Client

Reuse the established [elasticsearch-js](https://github.com/elastic/elasticsearch-js) client with AWS signature v4. Built-in support for Typescript.

## Getting Started

```bash
npm i @trmaphi/aws-elasticsearch-service-client @elastic/elasticsearch aws-sdk
```

## Usage

```javascript
const AWS = require('aws-sdk');
const { AWSElasticSearchClient } = require('@trmaphi/aws-elasticsearch-service-client');

AWS.config.update({
    credentials: new AWS.SharedIniFileCredentials({ profile: 'YOUR LOCAL AWS PROFILE'}),
    region: 'AWS REGION',
})

const client = new AWSElasticSearchClient({
    node: 'URL to AWS ElasticSearch Node',
});

client.search({
    index: 'Any index name',
    body: { query: { match_all: {} } }
})
    .then(res => console.log(res.body.hits.hits))
    .catch(err => console.error(err));
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/trmaphi/aws-elasticsearch-client/tags).

## Authors

* **Truong Ma Phi** - *Initial work* - [trmaphi](https://github.com/trmaphi)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
