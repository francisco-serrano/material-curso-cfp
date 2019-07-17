import Auto from "./auto";

export default class AutoCalle {
    private auto: Auto;

    public getMarca(): string {
        return this.auto.getMarca();
    }

    public a(): void {
        this.auto.a();
    }

    public b(): void {
        this.auto.b();
    }
}