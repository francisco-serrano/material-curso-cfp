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
var Primitive = /** @class */ (function () {
    function Primitive(val) {
        this.value = val;
    }
    Primitive.prototype.traverse = function () {
        console.log(this.value + "  ");
    };
    return Primitive;
}());
var Composite = /** @class */ (function () {
    function Composite(val) {
        this.children = new Array[9];
        this.total = 0;
        this.value = val;
    }
    Composite.prototype.add = function (c) {
        this.children[this.total++] = c;
    };
    Composite.prototype.traverse = function () {
        console.log(this.value + "  ");
        for (var i = 0; i < this.total; i++)
            this.children[i].traverse();
    };
    return Composite;
}());
var Row = /** @class */ (function (_super) {
    __extends(Row, _super);
    function Row(val) {
        return _super.call(this, val) || this;
    }
    Row.prototype.traverse = function () {
        console.log("Row");
        _super.prototype.traverse.call(this);
    };
    return Row;
}(Composite));
var Column = /** @class */ (function (_super) {
    __extends(Column, _super);
    function Column(val) {
        return _super.call(this, val) || this;
    }
    Column.prototype.traverse = function () {
        console.log("Col");
        _super.prototype.traverse.call(this);
    };
    return Column;
}(Composite));
var first = new Row(1);
var second = new Column(2);
var third = new Column(3);
var fourth = new Row(4);
var fifth = new Row(5);
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
