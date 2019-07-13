import Motor from "./motor";
import Rueda from "./rueda";

export default class Auto {
    private marca: string;
    private modelo: string;
    private motor: Motor;
    private ruedas: Rueda[];

    public constructor(marca: string, modelo: string, motor: Motor, ruedas: Rueda[]) {
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;

        if (this.cantidadCorrectaRuedas(ruedas) && this.ruedasMismoTamaño(ruedas))
            this.ruedas = ruedas;
        else
            console.log('Verificar que la cantidad de ruedas sea correcta y del mismo tamaño');
    }

    public getMarca(): string {
        return this.marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public getTipoMotor(): string {
        return this.motor.getTipo();
    }

    public getRodado(): number {
        return this.ruedas[0].getTamaño();
    }

    private cantidadCorrectaRuedas(ruedas: Rueda[]): boolean {
        return ruedas.length === 4;
    }

    private ruedasMismoTamaño(ruedas: Rueda[]): boolean {
        if (ruedas.length == 0)
            return false;

        let tamaño = ruedas[0].getTamaño();

        for (let i = 1; i < ruedas.length; i++) {
            if (ruedas[i].getTamaño() != tamaño)
                return false;
        }

        return true;
    }
}