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
var auto_1 = require("./auto");
var AutoDeportivo = /** @class */ (function (_super) {
    __extends(AutoDeportivo, _super);
    function AutoDeportivo(marca, modelo, tamañoEscape) {
        var _this = _super.call(this, marca, modelo) || this;
        _this.tamañoCañoEscapeGigante = tamañoEscape;
        return _this;
    }
    AutoDeportivo.prototype.getTamañoEscape = function () {
        return this.tamañoCañoEscapeGigante;
    };
    AutoDeportivo.prototype.setKilometraje = function (valor) {
        this.kilometraje = valor;
    };
    return AutoDeportivo;
}(auto_1["default"]));
exports["default"] = AutoDeportivo;
