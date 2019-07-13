"use strict";
exports.__esModule = true;
var Decodificador = /** @class */ (function () {
    function Decodificador() {
        this.canalActual = 0;
        this.volumenActual = 10;
    }
    Decodificador.prototype.prenderApagar = function () {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    };
    Decodificador.prototype.subirVolumen = function () {
        if (this.estaPrendido)
            this.volumenActual = this.volumenActual + 1;
    };
    Decodificador.prototype.bajarVolumen = function () {
        if (this.estaPrendido)
            this.volumenActual = this.volumenActual - 1;
    };
    Decodificador.prototype.subirCanal = function () {
        if (this.estaPrendido)
            this.canalActual = this.canalActual + 1;
    };
    Decodificador.prototype.bajarCanal = function () {
        if (this.estaPrendido)
            this.canalActual = this.canalActual - 1;
    };
    Decodificador.prototype.cambiarCanal = function (canal) {
        if (this.estaPrendido)
            this.canalActual = canal;
    };
    Decodificador.prototype.verCanalActual = function () {
        return this.canalActual;
    };
    Decodificador.prototype.verVolumenActual = function () {
        return this.volumenActual;
    };
    return Decodificador;
}());
exports["default"] = Decodificador;
