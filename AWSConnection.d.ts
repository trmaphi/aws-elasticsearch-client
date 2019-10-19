import * as http from 'http';
import AWS, { Credentials, AWSError, HttpRequest } from 'aws-sdk';
import { Connection } from '@elastic/elasticsearch';

interface RequestOptions extends http.ClientRequestArgs {
    asStream?: boolean;
    body?: any;
    querystring?: string;
}

export class AWSConnection extends Connection {
    request(params: RequestOptions, callback: (err: Error | null, response: http.IncomingMessage | null) => void): http.ClientRequest;
    _createRequest(params: any): HttpRequest
    _getAWSCredentials(): Promise<Credentials | AWSError>
    _signRequest(request: HttpRequest, creds: Credentials): any
}