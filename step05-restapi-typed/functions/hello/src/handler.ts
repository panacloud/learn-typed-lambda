/// <reference path="../typings/main.d.ts" />

module.exports.handler = function(event, context: Context) {
   return context.done(null, {
    message: 'Go Serverless! Your Lambda typed function executed successfully!'
  });
};


