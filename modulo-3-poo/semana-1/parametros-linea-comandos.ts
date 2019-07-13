function saludar(nombre: string): void {
    console.log('Hola ' + nombre);    
}

let parametrosLineaComandos = process.argv.slice(2);

if (parametrosLineaComandos.length == 0)
    console.log('Pasar parámetros por línea de comandos')

saludar(parametrosLineaComandos[0]);