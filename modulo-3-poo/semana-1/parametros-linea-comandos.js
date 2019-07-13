function saludar(nombre) {
    console.log('Hola ' + nombre);
}
var parametrosLineaComandos = process.argv.slice(2);
if (parametrosLineaComandos.length == 0)
    console.log('Pasar parámetros por línea de comandos');
saludar(parametrosLineaComandos[0]);
