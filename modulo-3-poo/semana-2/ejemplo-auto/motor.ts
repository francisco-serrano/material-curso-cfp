export default class Motor {
    private tipo: string;

    public constructor(tipo: string) {
        this.tipo = tipo;
    }

    public getTipo(): string {
        return this.tipo;
    }
}