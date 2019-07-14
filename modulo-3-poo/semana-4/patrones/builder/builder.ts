class Pizza {
    private dough: string = '';
    private salsa: string = '';
    private topping: string = '';

    public setDough(dough: string): void {
        this.dough = dough;
    }

    public setSauce(sauce: string): void {
        this.salsa = sauce;
    }

    public setTopping(topping: string): void {
        this.topping = topping;
    }
}

abstract class PizzaBuilder {
    protected pizza: Pizza;

    public getPizza(): Pizza {
        return this.pizza;
    }

    public createNewPizzaProduct(): void {
        this.pizza = new Pizza();
    }

    public abstract buildDough(): void;
    public abstract buildSauce(): void;
    public abstract buildTopping(): void;
}

class HawaiianPizzaBuilder extends PizzaBuilder {
    public buildDough(): void {
        this.pizza.setDough("cross");
    }

    public buildSauce(): void {
        this.pizza.setSauce("mild");
    }

    public buildTopping(): void {
        this.pizza.setTopping("ham+pineapple");
    }
}

class SpicyPizzaBuilder extends PizzaBuilder {
    public buildDough(): void {
        this.pizza.setDough("pan baked");
    }

    public buildSauce(): void {
        this.pizza.setSauce("hot");
    }

    public buildTopping(): void {
        this.pizza.setTopping("pepperoni+salami");
    }
}

class Waiter {
    private pizzaBuilder: PizzaBuilder;

    public setPizzaBuilder(pb: PizzaBuilder): void {
        this.pizzaBuilder = pb;
    }

    public getPizza(): Pizza {
        return this.pizzaBuilder.getPizza();
    }

    public constructPizza(): void {
        this.pizzaBuilder.createNewPizzaProduct();
        this.pizzaBuilder.buildDough();
        this.pizzaBuilder.buildSauce();
        this.pizzaBuilder.buildTopping();
    }
}

let waiter = new Waiter();
let hawaiianPizzabuilder: PizzaBuilder = new HawaiianPizzaBuilder();
let spicyPizzaBuilder: PizzaBuilder = new SpicyPizzaBuilder();

waiter.setPizzaBuilder(hawaiianPizzabuilder);
waiter.constructPizza();

let pizza: Pizza = waiter.getPizza();