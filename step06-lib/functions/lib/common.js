/// <reference path="../../typings/main.d.ts" />
"use strict";
var Common = (function () {
    function Common() {
    }
    Common.prototype.message = function () {
        return "from the lib for hello";
    };
    Common.prototype.second = function () {
        return "from the lib for second";
    };
    return Common;
}());
exports.Common = Common;
//# sourceMappingURL=common.js.map