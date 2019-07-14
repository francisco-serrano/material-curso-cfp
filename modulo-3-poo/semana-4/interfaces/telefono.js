var SmartPhone = /** @class */ (function () {
    function SmartPhone() {
    }
    SmartPhone.prototype.prender = function () {
        this.estaPrendido = true;
    };
    SmartPhone.prototype.apagar = function () {
        this.estaPrendido = false;
    };
    SmartPhone.prototype.llamar = function (numero) {
        console.log('Llamando a ' + numero);
    };
    return SmartPhone;
}());
// class Televisor {
//     estaPrendido: boolean
//     volumenActual: number
//     canalActual: number
//     constructor(volumenInicial: number, canalInicial: number) {
//         this.volumenActual = volumenInicial;
//         this.canalActual = canalInicial;
//     }
//     prenderApagar(): void {
//         if (this.estaPrendido)
//         this.estaPrendido = false
//         else
//         this.estaPrendido = true
//     }
//     subirVolumen(): void {
//         this.volumenActual = this.volumenActual + 1
//     }
//     bajarVolumen(): void {
//         this.volumenActual = this.volumenActual - 1
//     }
//     subirCanal(): void {
//         this.canalActual = this.canalActual + 1
//     }
//     bajarCanal(): void {
//         this.canalActual = this.canalActual - 1
//     }
//     elegirCanal(canal: number): void {
//         this.canalActual = canal;
//     }
// }
// let volumenInicial: number = 10;
// let canalInicial: number = 24;
// let miTelevisor = new Televisor(volumenInicial, canalInicial);
// let primerTelevisor = new Televisor();
// let segundoTelevisor = new Televisor();
// let tercerTelevisor = new Televisor();
// primerTelevisor.prenderApagar();
// primerTelevisor.subirCanal();
// segundoTelevisor.prenderApagar();
// segundoTelevisor.bajarCanal();
// segundoTelevisor.bajarVolumen();
// tercerTelevisor.prenderApagar();
// tercerTelevisor.subirVolumen();
