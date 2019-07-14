"use strict";
exports.__esModule = true;
var PistaAudio = /** @class */ (function () {
    function PistaAudio(id, titulo, duracion, interprete) {
        this.id = id;
        this.titulo = titulo;
        this.duracion = duracion;
        this.interprete = interprete;
    }
    PistaAudio.prototype.getDuracion = function () {
        return this.duracion;
    };
    PistaAudio.prototype.getCantidad = function () {
        return 1;
    };
    return PistaAudio;
}());
exports["default"] = PistaAudio;
