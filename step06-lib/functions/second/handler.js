'use strict';
var common_1 = require('../lib/common');
module.exports.handler = function (event, context) {
    var c = new common_1.Common();
    return context.done(null, {
        message: c.second()
    });
};
//# sourceMappingURL=handler.js.map