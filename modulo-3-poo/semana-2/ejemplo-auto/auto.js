"use strict";
exports.__esModule = true;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, motor, ruedas) {
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
        if (this.cantidadCorrectaRuedas(ruedas) && this.ruedasMismoTamaño(ruedas))
            this.ruedas = ruedas;
        else
            console.log('Verificar que la cantidad de ruedas sea correcta y del mismo tamaño');
    }
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.getTipoMotor = function () {
        return this.motor.getTipo();
    };
    Auto.prototype.getRodado = function () {
        return this.ruedas[0].getTamaño();
    };
    Auto.prototype.cantidadCorrectaRuedas = function (ruedas) {
        return ruedas.length === 4;
    };
    Auto.prototype.ruedasMismoTamaño = function (ruedas) {
        if (ruedas.length == 0)
            return false;
        var tamaño = ruedas[0].getTamaño();
        for (var i = 1; i < ruedas.length; i++) {
            if (ruedas[i].getTamaño() != tamaño)
                return false;
        }
        return true;
    };
    return Auto;
}());
exports["default"] = Auto;
