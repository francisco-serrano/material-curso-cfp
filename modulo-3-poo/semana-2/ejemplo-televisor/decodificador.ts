export default class Decodificador {
    private canalActual: number;
    private volumenActual: number;
    private estaPrendido: boolean;

    public constructor() {
        this.canalActual = 0;
        this.volumenActual = 10;
    }

    public prenderApagar(): void {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    }

    public subirVolumen(): void {
        if (this.estaPrendido)
            this.volumenActual = this.volumenActual + 1;
    }

    public bajarVolumen(): void {
        if (this.estaPrendido)
            this.volumenActual = this.volumenActual - 1;
    }

    public subirCanal(): void {
        if (this.estaPrendido)   
            this.canalActual = this.canalActual + 1;
    }

    public bajarCanal(): void {
        if (this.estaPrendido)
            this.canalActual = this.canalActual - 1;
    }

    public cambiarCanal(canal: number): void {
        if (this.estaPrendido)
            this.canalActual = canal;
    }

    public verCanalActual(): number {
        return this.canalActual;
    }

    public verVolumenActual(): number {
        return this.volumenActual;
    }
}