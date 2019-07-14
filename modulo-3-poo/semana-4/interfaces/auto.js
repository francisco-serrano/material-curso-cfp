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
var AutoCarreras = /** @class */ (function () {
    function AutoCarreras() {
        this.velocidadActual = 0;
    }
    AutoCarreras.prototype.acelerar = function () {
        this.velocidadActual += 50;
    };
    AutoCarreras.prototype.getVelocidadActual = function () {
        return this.velocidadActual;
    };
    return AutoCarreras;
}());
var AutoCiudad = /** @class */ (function () {
    function AutoCiudad() {
        this.velocidadActual = 0;
        this.estaPrendido = false;
    }
    AutoCiudad.prototype.prender = function () {
        this.estaPrendido = true;
    };
    AutoCiudad.prototype.apagar = function () {
        this.estaPrendido = false;
    };
    return AutoCiudad;
}());
var autoCiudad = new AutoCiudad();
var AutoCiudadChico = /** @class */ (function (_super) {
    __extends(AutoCiudadChico, _super);
    function AutoCiudadChico() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoCiudadChico.prototype.acelerar = function () {
        this.velocidadActual += 10;
    };
    return AutoCiudadChico;
}(AutoCiudad));
var auto = new AutoCarreras();
console.log(auto);
