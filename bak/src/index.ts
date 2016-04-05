/// <reference path="../typings/main.d.ts" />

exports.handler = function(event: S3PutEvent, context: Context) {
    console.log(event.Records[0].eventVersion);
    console.log(event.Records[0].s3.object.key);

    context.done(null, "done!");
   //context.succeed("Hello world Typed Lambda");
};

