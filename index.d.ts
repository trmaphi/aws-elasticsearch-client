import { Client, ClientOptions } from '@elastic/elasticsearch';
import { AWSConnection } from './AWSConnection';

declare module '@trmaphi/aws-elasticsearch-service-client' {
    export class AWSElasticSearchClient extends Client {
        constructor(opts: ClientOptions)
    }
}