// 1. Subsystem
var PointCartesian = /** @class */ (function () {
    function PointCartesian(x, y) {
        this.x = x;
        this.y = y;
    }
    PointCartesian.prototype.move = function (x, y) {
        this.x += x;
        this.y += y;
    };
    PointCartesian.prototype.toString = function () {
        return "(" + this.x + "," + this.y + ")";
    };
    PointCartesian.prototype.getX = function () {
        return this.x;
    };
    PointCartesian.prototype.getY = function () {
        return this.y;
    };
    return PointCartesian;
}());
// 1. Subsystem
var PointPolar = /** @class */ (function () {
    function PointPolar(radius, angle) {
        this.radius = radius;
        this.angle = angle;
    }
    PointPolar.prototype.rotate = function (angle) {
        this.angle += angle % 360;
    };
    PointPolar.prototype.toString = function () {
        return "[" + this.radius + "@" + this.angle + "]";
    };
    return PointPolar;
}());
// 1. Desired interface: move(), rotate()
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.pointCartesian = new PointCartesian(x, y);
    }
    Point.prototype.toString = function () {
        return this.pointCartesian.toString();
    };
    // 4. Wrapper maps
    Point.prototype.move = function (x, y) {
        this.pointCartesian.move(x, y);
    };
    Point.prototype.rotate = function (angle, o) {
        var x = this.pointCartesian.getX() - o.pointCartesian.getX();
        var y = this.pointCartesian.getY() - o.pointCartesian.getY();
        var pointPolar = new PointPolar(Math.sqrt(x * x + y * y), Math.atan2(y, x) * 180 / Math.PI);
        // 4. Wrapper maps
        pointPolar.rotate(angle);
        console.log("  PointPolar is " + pointPolar);
        var str = pointPolar.toString();
        var i = str.indexOf('@');
        var r = Number(str.substring(1, i));
        var a = Number(str.substring(i + 1, str.length - 1));
        this.pointCartesian = new PointCartesian(r * Math.cos(a * Math.PI / 180) + o.pointCartesian.getX(), r * Math.sin(a * Math.PI / 180) + o.pointCartesian.getY());
    };
    return Point;
}());
var Line = /** @class */ (function () {
    function Line(ori, end) {
        this.o = ori;
        this.e = end;
    }
    Line.prototype.move = function (x, y) {
        this.o.move(x, y);
        this.e.move(x, y);
    };
    Line.prototype.rotate = function (angle) {
        this.e.rotate(angle, this.o);
    };
    Line.prototype.toString = function () {
        return "origin is " + this.o + ", end is " + this.e;
    };
    return Line;
}());
// 3. Client uses the Facade
var lineA = new Line(new Point(2, 4), new Point(5, 7));
lineA.move(-2, -4);
console.log("after move:  " + lineA);
lineA.rotate(45);
console.log("after rotate: " + lineA);
var lineB = new Line(new Point(2, 1), new Point(2.866, 1.5));
lineB.rotate(30);
console.log("30 degrees to 60 degrees: " + lineB);
