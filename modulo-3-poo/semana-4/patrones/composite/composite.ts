interface Component {
    traverse(): void;
}

class Primitive implements Component {
    private value: number;

    public constructor(val: number) {
        this.value = val;
    }

    public traverse(): void {
        console.log(this.value + "  ");
    }
}

abstract class Composite implements Component {
    private children: Component[] = new Array[9];
    private total: number = 0;
    private value: number;

    public constructor(val: number) {
        this.value = val;
    }

    public add(c: Component): void {
        this.children[this.total++] = c;
    }

    public traverse(): void {
        console.log(this.value + "  ");

        for (let i = 0; i < this.total; i++)
            this.children[i].traverse();
    }
}

class Row extends Composite {
    public constructor(val: number) {
        super(val);
    }

    public traverse(): void {
        console.log("Row");

        super.traverse();
    }
}

class Column extends Composite {
    public constructor(val: number) {
        super(val);
    }

    public traverse(): void {
        console.log("Col");

        super.traverse();
    }
}

let first: Composite = new Row(1);
let second: Composite = new Column(2);
let third: Composite = new Column(3);
let fourth: Composite = new Row(4);
let fifth: Composite = new Row(5);

first.add(second);
first.add(third);
third.add(fourth);
third.add(fifth);

first.add(new Primitive(6));
second.add(new Primitive(7));
third.add(new Primitive(8));
fourth.add(new Primitive(9));
fifth.add(new Primitive(10));

first.traverse();