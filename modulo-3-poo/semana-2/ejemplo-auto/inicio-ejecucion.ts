import Auto from './auto';
import Motor from './motor';
import Rueda from './rueda';

let motor: Motor = new Motor('Nafta');
let ruedas: Rueda[] = [
    new Rueda(16),
    new Rueda(16),
    new Rueda(16),
    new Rueda(16),
];

let primerAuto: Auto = new Auto('Fiat', 'Palio', motor, ruedas);

console.log(primerAuto);