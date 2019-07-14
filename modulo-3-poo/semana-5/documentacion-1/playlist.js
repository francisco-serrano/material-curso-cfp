"use strict";
exports.__esModule = true;
var Playlist = /** @class */ (function () {
    function Playlist(nombre) {
        this.nombre = nombre;
        this.elementos = [];
    }
    Playlist.prototype.getDuracion = function () {
        var sumaDuraciones = 0;
        for (var i = 0; i < this.elementos.length; i++)
            sumaDuraciones += this.elementos[i].getDuracion();
        return sumaDuraciones;
    };
    Playlist.prototype.getCantidad = function () {
        var cantidad = 0;
        for (var i = 0; i < this.elementos.length; i++)
            cantidad += this.elementos[i].getCantidad();
        return cantidad;
    };
    Playlist.prototype.getElementos = function () {
        return this.elementos;
    };
    Playlist.prototype.agregar = function (m) {
        this.elementos.push(m);
    };
    Playlist.prototype.estaVacia = function () {
        return this.elementos.length == 0;
    };
    Playlist.prototype.eliminar = function (posicion) {
        if (posicion < 0 || posicion >= this.elementos.length)
            return false;
        // A partir de 'posicion', eliminar un elemento
        this.elementos.splice(posicion, 1);
        return true;
    };
    return Playlist;
}());
exports["default"] = Playlist;
