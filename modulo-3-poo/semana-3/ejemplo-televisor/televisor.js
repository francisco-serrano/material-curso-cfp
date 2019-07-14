"use strict";
exports.__esModule = true;
var Televisor = /** @class */ (function () {
    function Televisor() {
        this.canalActual = 0;
        this.volumenActual = 10;
        this.estaPrendido = false;
    }
    Televisor.prototype.subirCanal = function () {
        this.canalActual += 1;
    };
    Televisor.prototype.bajarCanal = function () {
        this.canalActual -= 1;
    };
    Televisor.prototype.subirVolumen = function () {
        this.volumenActual += 1;
    };
    Televisor.prototype.bajarVolumen = function () {
        this.volumenActual -= 1;
    };
    Televisor.prototype.prender = function () {
        this.estaPrendido = true;
    };
    Televisor.prototype.apagar = function () {
        this.estaPrendido = false;
    };
    return Televisor;
}());
exports["default"] = Televisor;
