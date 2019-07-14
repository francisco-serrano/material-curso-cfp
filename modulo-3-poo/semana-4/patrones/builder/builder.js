var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pizza = /** @class */ (function () {
    function Pizza() {
        this.dough = '';
        this.salsa = '';
        this.topping = '';
    }
    Pizza.prototype.setDough = function (dough) {
        this.dough = dough;
    };
    Pizza.prototype.setSauce = function (sauce) {
        this.salsa = sauce;
    };
    Pizza.prototype.setTopping = function (topping) {
        this.topping = topping;
    };
    return Pizza;
}());
var PizzaBuilder = /** @class */ (function () {
    function PizzaBuilder() {
    }
    PizzaBuilder.prototype.getPizza = function () {
        return this.pizza;
    };
    PizzaBuilder.prototype.createNewPizzaProduct = function () {
        this.pizza = new Pizza();
    };
    return PizzaBuilder;
}());
var HawaiianPizzaBuilder = /** @class */ (function (_super) {
    __extends(HawaiianPizzaBuilder, _super);
    function HawaiianPizzaBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HawaiianPizzaBuilder.prototype.buildDough = function () {
        this.pizza.setDough("cross");
    };
    HawaiianPizzaBuilder.prototype.buildSauce = function () {
        this.pizza.setSauce("mild");
    };
    HawaiianPizzaBuilder.prototype.buildTopping = function () {
        this.pizza.setTopping("ham+pineapple");
    };
    return HawaiianPizzaBuilder;
}(PizzaBuilder));
var SpicyPizzaBuilder = /** @class */ (function (_super) {
    __extends(SpicyPizzaBuilder, _super);
    function SpicyPizzaBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpicyPizzaBuilder.prototype.buildDough = function () {
        this.pizza.setDough("pan baked");
    };
    SpicyPizzaBuilder.prototype.buildSauce = function () {
        this.pizza.setSauce("hot");
    };
    SpicyPizzaBuilder.prototype.buildTopping = function () {
        this.pizza.setTopping("pepperoni+salami");
    };
    return SpicyPizzaBuilder;
}(PizzaBuilder));
var Waiter = /** @class */ (function () {
    function Waiter() {
    }
    Waiter.prototype.setPizzaBuilder = function (pb) {
        this.pizzaBuilder = pb;
    };
    Waiter.prototype.getPizza = function () {
        return this.pizzaBuilder.getPizza();
    };
    Waiter.prototype.constructPizza = function () {
        this.pizzaBuilder.createNewPizzaProduct();
        this.pizzaBuilder.buildDough();
        this.pizzaBuilder.buildSauce();
        this.pizzaBuilder.buildTopping();
    };
    return Waiter;
}());
var waiter = new Waiter();
var hawaiianPizzabuilder = new HawaiianPizzaBuilder();
var spicyPizzaBuilder = new SpicyPizzaBuilder();
waiter.setPizzaBuilder(hawaiianPizzabuilder);
waiter.constructPizza();
var pizza = waiter.getPizza();
