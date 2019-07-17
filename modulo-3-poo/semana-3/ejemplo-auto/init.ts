import AutoDeportivo from "./AutoDeportivo";
import Auto from "./auto";

let miAutoDeportivo = new AutoDeportivo("Fiat", "Uno", 5);
console.log(miAutoDeportivo.getMarca());
console.log(miAutoDeportivo.getModelo());

let miAuto = new Auto("Renault", "Clio");
console.log(miAuto.getMarca());

console.log(miAuto);
console.log(miAutoDeportivo);