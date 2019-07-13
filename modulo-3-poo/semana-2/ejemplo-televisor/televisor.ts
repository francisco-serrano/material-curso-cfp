import Decodificador from "./decodificador";

export default class Televisor {
    private estaPrendido: boolean;
    private decodificador: Decodificador;
    private marca: string;

    public constructor(marca: string, decodificador?: Decodificador) {
        this.marca = marca;
        this.decodificador = decodificador;
    }
    
    public prenderApagar(): void {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    }

    public subirVolumen(): void {
        if (this.estaPrendido)
            this.decodificador.subirVolumen();
    }

    public bajarVolumen(): void {
        if (this.estaPrendido)
            this.decodificador.subirVolumen();
    }

    public subirCanal(): void {
        if (this.estaPrendido)   
            this.decodificador.subirCanal();
    }

    public bajarCanal(): void {
        if (this.estaPrendido)
            this.decodificador.bajarCanal();
    }

    public cambiarCanal(canal: number): void {
        if (this.estaPrendido)
            this.decodificador.cambiarCanal(canal);
    }

    public verCanalActual(): number {
        return this.decodificador.verCanalActual();
    }

    public verVolumenActual(): number {
        return this.decodificador.verVolumenActual();
    }
}