'use strict';

import {Common} from '../lib/common';

module.exports.handler = function(event, context) {
    var c = new Common();
  return context.done(null, {
    message: c.second()
  });
};
