import Auto from "./auto";

export default class AutoDeportivo extends Auto {
    private tamañoEscape: number;

    public constructor(marca: string, modelo: string, tamañoEscape: number) {
        super(marca, modelo);

        this.tamañoEscape = tamañoEscape;
    }

    public getTamañoEscape(): number {
        return this.tamañoEscape;
    }

    public setKilometraje(valor: number): void {
        this.kilometraje = valor;
    }
}