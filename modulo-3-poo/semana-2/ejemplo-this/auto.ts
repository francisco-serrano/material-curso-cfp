export default class Auto {
    private marca: string;
    private modelo: string;

    public constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    public getMarca(): string {
        return this.marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public printAuto(): void {
        console.log(this);
    }
}