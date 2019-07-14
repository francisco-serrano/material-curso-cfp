/* The OLD */
class SquarePeg {
    private width: number;

    public constructor(width: number) {
        this.width = width;
    }

    public getWidth(): number {
        return this.width;
    }

    public setWidth(width: number): void {
        this.width = width;
    }
}

/* The NEW */
class RoundHole {
    private radius: number;

    public constructor(radius: number) {
        this.radius = radius;
        console.log("RoundHole: max SquarePeg is " + this.radius * Math.sqrt(2));
    }

    public getRadius(): number {
        return this.radius;
    }
}

// Design a "wrapper" class that can "impedance match" the old to the new
class SquarePegAdapter {
    // The adapter/wrapper class "has a" instance of the legacy class
    private squarePeg: SquarePeg;

    public constructor(w: number) {
        this.squarePeg = new SquarePeg(w);
    }

    // Identify the desired interface
    public makeFit(roundHole: RoundHole): void {
        // The adapter/wrapper class delegates to the legacy object
        let amount: number = this.squarePeg.getWidth() - roundHole.getRadius() * Math.sqrt(2);
        console.log("reducing SquarePeg " + this.squarePeg.getWidth() + " by " + ((amount < 0) ? 0 : amount) + " amount");

        if (amount > 0) {
            this.squarePeg.setWidth(this.squarePeg.getWidth() - amount);
            console.log("   width is now " + this.squarePeg.getWidth());
        }
    }
}


let roundHole: RoundHole = new RoundHole(5);
let squarePegAdapter: SquarePegAdapter;
for (let i = 6; i < 10; i++) {
    squarePegAdapter = new SquarePegAdapter(i);
    // The client uses (is coupled to) the new interface
    squarePegAdapter.makeFit(roundHole);
}
