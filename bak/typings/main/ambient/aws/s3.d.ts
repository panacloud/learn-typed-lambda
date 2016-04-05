// S3 Put Event https://github.com/kaiinui/lambda_kit/blob/master/lambda.d.ts

declare class S3PutEvent {
    Records: Array<S3PutRecord>
}

declare class S3PutRecord {
    eventVersion: string;
    eventSource: string;
    awsRegion: string;
    eventTime: string;
    eventName: string;
    userIdentity: S3UserIdentity;
    requestParameters: S3RequestParameters;
    responseElements: S3ResponseElements;
    s3: S3;
}

declare class S3UserIdentity {
    principalId: string;
}

declare class S3RequestParameters {
    sourceIPAddress: string;
}

declare class S3ResponseElements {
    "x-amz-request-id": string;
    "x-amz-id-2": string;
}

declare class S3 {
    s3SchemaVersion: string;
    configurationId: string;
    bucket: S3Bucket;
    object: S3Object;
}

declare class S3Bucket {
    name: string;
    ownerIdentity: S3UserIdentity;
    arn: string;
}

declare class S3Object {
    key: string;
    size: number;
    eTag: string;
}