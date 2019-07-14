/* The OLD */
var SquarePeg = /** @class */ (function () {
    function SquarePeg(width) {
        this.width = width;
    }
    SquarePeg.prototype.getWidth = function () {
        return this.width;
    };
    SquarePeg.prototype.setWidth = function (width) {
        this.width = width;
    };
    return SquarePeg;
}());
/* The NEW */
var RoundHole = /** @class */ (function () {
    function RoundHole(radius) {
        this.radius = radius;
        console.log("RoundHole: max SquarePeg is " + this.radius * Math.sqrt(2));
    }
    RoundHole.prototype.getRadius = function () {
        return this.radius;
    };
    return RoundHole;
}());
// Design a "wrapper" class that can "impedance match" the old to the new
var SquarePegAdapter = /** @class */ (function () {
    function SquarePegAdapter(w) {
        this.squarePeg = new SquarePeg(w);
    }
    // Identify the desired interface
    SquarePegAdapter.prototype.makeFit = function (roundHole) {
        // The adapter/wrapper class delegates to the legacy object
        var amount = this.squarePeg.getWidth() - roundHole.getRadius() * Math.sqrt(2);
        console.log("reducing SquarePeg " + this.squarePeg.getWidth() + " by " + ((amount < 0) ? 0 : amount) + " amount");
        if (amount > 0) {
            this.squarePeg.setWidth(this.squarePeg.getWidth() - amount);
            console.log("   width is now " + this.squarePeg.getWidth());
        }
    };
    return SquarePegAdapter;
}());
var roundHole = new RoundHole(5);
var squarePegAdapter;
for (var i = 6; i < 10; i++) {
    squarePegAdapter = new SquarePegAdapter(i);
    // The client uses (is coupled to) the new interface
    squarePegAdapter.makeFit(roundHole);
}
