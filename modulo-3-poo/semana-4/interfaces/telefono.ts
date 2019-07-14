interface Telefono {
    prender(): void;
    apagar(): void;
    llamar(numero: string): void;
}

class SmartPhone implements Telefono {
    private estaPrendido: boolean;

    public prender(): void {
        this.estaPrendido = true;
    }

    public apagar(): void {
        this.estaPrendido = false;
    }

    public llamar(numero: string) {
        console.log('Llamando a ' + numero);        
    }
}

// class Televisor {
//     private estaPrendido: boolean
//     private volumenActual: number
//     private canalActual: number
    
//     constructor(volumenInicial: number, canalInicial: number) {
//         this.volumenActual = volumenInicial;
//         this.canalActual = canalInicial;
//     }

//     public prenderApagar(): void {
//         if (this.estaPrendido)
//             this.estaPrendido = false
//         else
//             this.estaPrendido = true
//     }

//     public subirVolumen(): void {
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

// let primerTelevisor: Televisor = new Televisor(volumenInicial, canalInicial);

// primerTelevisor.canal = 30;
// primerTelevisor.elegirCanal(30)

// let segundoTelevisor: Televisor = new Televisor(5, 20);
// let tercerTelevisor: Televisor = new Televisor(15, 30);

// primerTelevisor.prenderApagar();
// primerTelevisor.subirCanal();

// segundoTelevisor.prenderApagar();
// segundoTelevisor.bajarCanal();
// segundoTelevisor.bajarVolumen();

// tercerTelevisor.prenderApagar();
// tercerTelevisor.subirVolumen();

// let valores: number[] = [3, 4, 5, 6, 7];

// let calculadora: Calculadora = new Calculadora();
// console.log(calculadora.calcularPromedio(valores));