/// <reference path="../../typings/main.d.ts" />

import {Common} from '../lib/common';


exports.handler = function(event, context: Context) {
   var c = new Common(); 
    
   context.succeed(c.message());
};

