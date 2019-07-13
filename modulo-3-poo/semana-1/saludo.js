"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
function saludar(nombre) {
    console.log('Hola ' + nombre);
}
var nombre;
nombre = readlineSync.question('Ingresar nombre: ');
saludar(nombre);
