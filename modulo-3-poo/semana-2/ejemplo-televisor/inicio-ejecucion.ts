import Decodificador from "./decodificador";
import Televisor from "./televisor";

let decodificador_a: Decodificador = new Decodificador();
decodificador_a.prenderApagar();

let primerTelevisor: Televisor = new Televisor("Samsung");

let decodificador: Decodificador = new Decodificador();
let segundoTelevisor: Televisor = new Televisor("Samsung", decodificador);

console.log(primerTelevisor);
console.log(segundoTelevisor);