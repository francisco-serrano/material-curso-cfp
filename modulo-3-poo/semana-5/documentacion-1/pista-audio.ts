import Musica from "./musica";

export default class PistaAudio implements Musica {
    private id: number;
    private titulo: string;
    private duracion: number;
    private interprete: string;
    
    public constructor(id: number, titulo: string, duracion: number, interprete: string) {
        this.id = id;
        this.titulo = titulo;
        this.duracion = duracion;
        this.interprete = interprete;
    }

    public getDuracion(): number {
        return this.duracion;
    }

    public getCantidad(): number {
        return 1;
    }
}