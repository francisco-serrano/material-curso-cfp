"use strict";
exports.__esModule = true;
var Televisor = /** @class */ (function () {
    function Televisor(marca, decodificador) {
        this.marca = marca;
        this.decodificador = decodificador;
    }
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    };
    Televisor.prototype.subirVolumen = function () {
        if (this.estaPrendido)
            this.decodificador.subirVolumen();
    };
    Televisor.prototype.bajarVolumen = function () {
        if (this.estaPrendido)
            this.decodificador.subirVolumen();
    };
    Televisor.prototype.subirCanal = function () {
        if (this.estaPrendido)
            this.decodificador.subirCanal();
    };
    Televisor.prototype.bajarCanal = function () {
        if (this.estaPrendido)
            this.decodificador.bajarCanal();
    };
    Televisor.prototype.cambiarCanal = function (canal) {
        if (this.estaPrendido)
            this.decodificador.cambiarCanal(canal);
    };
    Televisor.prototype.verCanalActual = function () {
        return this.decodificador.verCanalActual();
    };
    Televisor.prototype.verVolumenActual = function () {
        return this.decodificador.verVolumenActual();
    };
    return Televisor;
}());
exports["default"] = Televisor;
