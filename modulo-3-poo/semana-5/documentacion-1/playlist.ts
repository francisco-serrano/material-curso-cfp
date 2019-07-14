import Musica from "./musica";

export default class Playlist implements Musica {
    private nombre: string;
    private elementos: Musica[];

    public constructor(nombre: string) {
        this.nombre = nombre;
        this.elementos = [];
    }

    public getDuracion(): number {
        let sumaDuraciones = 0;

        for (let i = 0; i < this.elementos.length; i++)
            sumaDuraciones += this.elementos[i].getDuracion();

        return sumaDuraciones;
    }

    public getCantidad(): number {
        let cantidad = 0;

        for (let i = 0; i < this.elementos.length; i++)
            cantidad += this.elementos[i].getCantidad();

        return cantidad;
    }

    public getElementos(): Musica[] {
        return this.elementos;
    }

    public agregar(m: Musica): void {
        this.elementos.push(m);
    }

    public estaVacia(): boolean {
        return this.elementos.length == 0;
    }

    public eliminar(posicion: number): boolean {
        if (posicion < 0 || posicion >= this.elementos.length)
            return false;

        // A partir de 'posicion', eliminar un elemento
        this.elementos.splice(posicion, 1); 

        return true;
    }
}