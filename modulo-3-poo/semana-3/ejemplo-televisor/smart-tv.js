"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var televisor_1 = require("./televisor");
var SmartTV = /** @class */ (function (_super) {
    __extends(SmartTV, _super);
    function SmartTV() {
        var _this = _super.call(this) || this;
        _this.canalActual = 1;
        return _this;
    }
    SmartTV.prototype.mirarNetflix = function () {
        console.log('Mirando Netflix...');
    };
    return SmartTV;
}(televisor_1["default"]));
exports["default"] = SmartTV;
