interface Auto {
    acelerar(): void;
    getVelocidadActual(): number;
}

class AutoCarreras implements Auto {
    private velocidadActual: number;

    constructor() {
        this.velocidadActual = 0;
    }

    public acelerar(): void  {
        this.velocidadActual += 50;
    }

    public getVelocidadActual(): number {
        return this.velocidadActual;
    }
}

abstract class AutoCiudad {
    protected velocidadActual: number;
    private estaPrendido: boolean;

    constructor() {
        this.velocidadActual = 0;
        this.estaPrendido = false;
    }

    abstract acelerar(): void;
    
    public prender(): void {
        this.estaPrendido = true;
    }

    public apagar(): void {
        this.estaPrendido = false;
    }
}

let autoCiudad: AutoCiudad = new AutoCiudad();

class AutoCiudadChico extends AutoCiudad {
    public acelerar(): void {
        this.velocidadActual += 10;
    }
}

let auto: Auto = new AutoCarreras();

console.log(auto);
