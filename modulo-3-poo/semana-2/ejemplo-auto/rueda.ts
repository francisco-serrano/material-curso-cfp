export default class Rueda {
    private tamaño: number;

    public constructor(tamaño: number) {
        this.tamaño = tamaño;
    }

    public getTamaño(): number {
        return this.tamaño;
    }
}