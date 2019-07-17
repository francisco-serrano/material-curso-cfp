"use strict";
exports.__esModule = true;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.kilometraje = 0;
    }
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.a = function () {
        console.log('a');
    };
    Auto.prototype.b = function () {
        console.log('b');
    };
    return Auto;
}());
exports["default"] = Auto;
