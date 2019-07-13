"use strict";
exports.__esModule = true;
var fs = require("fs");
function leerArchivo(rutaArchivo) {
    var archivo = fs.readFileSync(rutaArchivo, 'utf8');
    var lineas = archivo.split('\n');
    lineas = lineas.map(function (linea) { return linea.replace('\r', ''); });
    return lineas;
}
console.log(leerArchivo('./semana-2/manejo-archivos/info_autos.txt'));
