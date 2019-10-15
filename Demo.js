import { AWSConnection } from './Connection';
import { Client } from '@elastic/elasticsearch';
import AWS from 'aws-sdk';

AWS.config.update({
    credentials: new AWS.Credentials(
        '***',
        '***',
    ),
    region: '***',
})

const client = new Client({
    node: '***',
    Connection: AWSConnection
});

export default client; 