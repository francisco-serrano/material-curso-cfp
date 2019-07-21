export default class Item {
    private descripcion: string;
    private costo: number;

    public constructor(descripcion: string, costo: number) {
        this.descripcion = descripcion;
        this.costo = costo;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }

    public getCosto(): number {
        return this.costo;
    }

    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

    public setCosto(costo: number): void {
        this.costo = costo;
    }

    public equals(Item i): boolean {
        return this.costo == i.getCosto() && this.descripcion == i.getDescripcion();
    }
}