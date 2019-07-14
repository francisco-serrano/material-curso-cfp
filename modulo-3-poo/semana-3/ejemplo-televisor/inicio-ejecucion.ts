import SmartTV from "./smart-tv";
import Televisor from "./televisor";


let miTelevisorComun = new Televisor();
let miTelevisorSmart = new SmartTV();

miTelevisorComun.subirCanal();
miTelevisorSmart.subirCanal();

miTelevisorSmart.mirarNetflix();

console.log(miTelevisorComun);
console.log(miTelevisorSmart);