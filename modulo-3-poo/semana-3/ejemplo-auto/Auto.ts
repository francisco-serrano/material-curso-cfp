export default class Auto {
    private marca: string;
    private modelo: string;
    protected kilometraje: number;

    public constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.kilometraje = 0;
    }

    public getMarca(): string {
        return this.marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public a(): void {
        console.log('a');
    }

    public b(): void {
        console.log('b');
    }
}