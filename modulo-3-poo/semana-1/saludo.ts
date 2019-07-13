import * as readlineSync from 'readline-sync';

function saludar(nombre: string): void {
    console.log('Hola ' + nombre);    
}

let nombre: string;
nombre = readlineSync.question('Ingresar nombre: ');

saludar(nombre);