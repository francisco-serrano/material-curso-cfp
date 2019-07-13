"use strict";
exports.__esModule = true;
var auto_1 = require("./auto");
var motor_1 = require("./motor");
var rueda_1 = require("./rueda");
var motor = new motor_1["default"]('Nafta');
var ruedas = [
    new rueda_1["default"](16),
    new rueda_1["default"](16),
    new rueda_1["default"](16),
    new rueda_1["default"](16),
];
var primerAuto = new auto_1["default"]('Fiat', 'Palio', motor, ruedas);
console.log(primerAuto);
