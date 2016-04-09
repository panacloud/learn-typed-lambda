'use strict';

var lib = require('../lib/common');

module.exports.handler = function(event, context) {
  
  lib.respond(event.note, function(error, response) {
        return context.done(error, response);
    });
};
