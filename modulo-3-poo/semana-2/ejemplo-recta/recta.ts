import Punto from './punto';

export default class Recta {
    private puntoA: Punto;
    private puntoB: Punto;

    public constructor(puntoA: Punto, puntoB: Punto) {
        this.puntoA = puntoA;
        this.puntoB = puntoB;
    }

    public getPuntoA(): Punto {
        return this.puntoA;
    }

    public getPuntoB(): Punto {
        return this.puntoB;
    }
}