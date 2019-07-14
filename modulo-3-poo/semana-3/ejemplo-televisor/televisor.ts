export default class Televisor {
    protected canalActual: number;
    protected volumenActual: number;
    private estaPrendido: boolean;

    public constructor() {
        this.canalActual = 0;
        this.volumenActual = 10;
        this.estaPrendido = false;
    }

    public subirCanal(): void {
        this.canalActual += 1;
    }

    public bajarCanal(): void {
        this.canalActual -= 1;
    }

    public subirVolumen(): void {
        this.volumenActual += 1;
    }

    public bajarVolumen(): void {
        this.volumenActual -= 1;
    }

    public prender(): void {
        this.estaPrendido = true;
    }

    public apagar(): void {
        this.estaPrendido = false;
    }
}