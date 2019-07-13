"use strict";
exports.__esModule = true;
var auto_1 = require("./auto");
var miAuto = new auto_1["default"]('Fiat', 'Uno');
var segundoAuto = new auto_1["default"]('Renault', 'Clio');
miAuto.printAuto();
console.log(miAuto);
segundoAuto.printAuto();
console.log(segundoAuto);
