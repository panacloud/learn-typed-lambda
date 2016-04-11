/// <reference path="../../typings/main.d.ts" />
"use strict";
var common_1 = require('../lib/common');
exports.handler = function (event, context) {
    var c = new common_1.Common();
    context.succeed(c.message());
};
//# sourceMappingURL=handler.js.map