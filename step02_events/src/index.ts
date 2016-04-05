/// <reference path="../typings/main.d.ts" />

exports.handler = function(event, context: Context) {
   context.succeed("Hello " + event.username);
};

