import { Client, ClientOptions } from '@elastic/elasticsearch';
import { AWSConnection } from './AWSConnection';

declare class AWSElasticSearchClient extends Client {
    constructor(opts: ClientOptions)
}

export {
    AWSElasticSearchClient,
}