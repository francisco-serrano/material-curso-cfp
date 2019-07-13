import * as fs from 'fs';

function leerArchivo(rutaArchivo: string): string[] {
    let archivo: string = fs.readFileSync(rutaArchivo, 'utf8');
    
    let lineas: string[] = archivo.split('\n');
    lineas = lineas.map(linea => linea.replace('\r', ''));

    return lineas;
}

console.log(leerArchivo('./semana-2/manejo-archivos/info_autos.txt'));
