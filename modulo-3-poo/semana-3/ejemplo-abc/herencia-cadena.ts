class A {
    public constructor() {
        console.log('a');
    }
}

class B extends A {
    public constructor() {
        super();
        console.log('b');
    }
}

class C extends B {
    public constructor() {
        super();
        console.log('c');
    }
}

let c = new C();