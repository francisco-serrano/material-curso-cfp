"use strict";
exports.__esModule = true;
var Item = /** @class */ (function () {
    function Item(descripcion, costo) {
        this.descripcion = descripcion;
        this.costo = costo;
    }
    Item.prototype.getDescripcion = function () {
        return this.descripcion;
    };
    Item.prototype.getCosto = function () {
        return this.costo;
    };
    Item.prototype.setDescripcion = function (descripcion) {
        this.descripcion = descripcion;
    };
    Item.prototype.setCosto = function (costo) {
        this.costo = costo;
    };
    return Item;
}());
exports["default"] = Item;
