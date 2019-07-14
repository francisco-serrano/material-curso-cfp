// 1. Subsystem
class PointCartesian {
    private x: number
    private y: number;

    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public move(x: number, y: number): void {
        this.x += x;
        this.y += y;
    }

    public toString(): string {
        return "(" + this.x + "," + this.y + ")";
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }
}

// 1. Subsystem
class PointPolar {
    private radius: number
    private angle: number;

    public constructor(radius: number, angle: number) {
        this.radius = radius;
        this.angle = angle;
    }

    public rotate(angle: number): void {
        this.angle += angle % 360;
    }

    public toString(): string {
        return "[" + this.radius + "@" + this.angle + "]";
    }
}

// 1. Desired interface: move(), rotate()
class Point {
    // 2. Design a "wrapper" class
    private pointCartesian: PointCartesian;

    public constructor(x: number, y: number) {
        this.pointCartesian = new PointCartesian(x, y);
    }

    public toString(): string {
        return this.pointCartesian.toString();
    }

    // 4. Wrapper maps
    public move(x: number, y: number): void {
        this.pointCartesian.move(x, y);
    }

    public rotate(angle: number, o: Point): void {
        let x = this.pointCartesian.getX() - o.pointCartesian.getX();
        let y = this.pointCartesian.getY() - o.pointCartesian.getY();
        let pointPolar: PointPolar = new PointPolar(Math.sqrt(x * x + y * y), Math.atan2(y, x) * 180 / Math.PI);
        // 4. Wrapper maps
        pointPolar.rotate(angle);
        console.log("  PointPolar is " + pointPolar);
        let str = pointPolar.toString();
        let i = str.indexOf('@');
        let r = Number(str.substring(1, i));
        let a = Number(str.substring(i + 1, str.length - 1));
        this.pointCartesian = new PointCartesian(r * Math.cos(a * Math.PI / 180) + o.pointCartesian.getX(),
            r * Math.sin(a * Math.PI / 180) + o.pointCartesian.getY());
    }
}

class Line {
    private o: Point; 
    private e: Point;
    
    public constructor(ori: Point, end: Point) {
        this.o = ori;
        this.e = end;
    }

    public move(x: number, y: number): void {
        this.o.move(x, y);
        this.e.move(x, y);
    }

    public rotate(angle: number): void {
        this.e.rotate(angle, this.o);
    }

    public toString(): string {
        return "origin is " + this.o + ", end is " + this.e;
    }
}

// 3. Client uses the Facade
let lineA = new Line(new Point(2, 4), new Point(5, 7));
lineA.move(-2, -4);
console.log("after move:  " + lineA);
lineA.rotate(45);
console.log("after rotate: " + lineA);

let lineB = new Line(new Point(2, 1), new Point(2.866, 1.5));
lineB.rotate(30);
console.log("30 degrees to 60 degrees: " + lineB);
