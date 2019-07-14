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
// 2. Bury implementation
var StrategySolution = /** @class */ (function () {
    function StrategySolution() {
    }
    // 3. Template Method
    StrategySolution.prototype.solve = function () {
        this.start();
        while (this.nextTry() && !this.isSolution()) {
        }
        this.stop();
    };
    return StrategySolution;
}());
var FOO = /** @class */ (function (_super) {
    __extends(FOO, _super);
    function FOO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = 1;
        return _this;
    }
    FOO.prototype.start = function () {
        console.log("Start  ");
    };
    FOO.prototype.stop = function () {
        console.log("Stop");
    };
    FOO.prototype.nextTry = function () {
        console.log("NextTry-" + this.state++ + "  ");
        return true;
    };
    FOO.prototype.isSolution = function () {
        console.log("IsSolution-" + (this.state == 3) + "  ");
        return (this.state == 3);
    };
    return FOO;
}(StrategySolution));
// 2. Bury implementation
var StrategySearch = /** @class */ (function () {
    function StrategySearch() {
    }
    // 3. Template Method
    StrategySearch.prototype.solve = function () {
        while (true) {
            this.preProcess();
            if (this.search())
                break;
            this.postProcess();
        }
    };
    return StrategySearch;
}());
var BAR = /** @class */ (function (_super) {
    __extends(BAR, _super);
    function BAR() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = 1;
        return _this;
    }
    BAR.prototype.preProcess = function () {
        console.log("PreProcess  ");
    };
    BAR.prototype.postProcess = function () {
        console.log("PostProcess  ");
    };
    BAR.prototype.search = function () {
        console.log("Search-" + this.state++ + "  ");
        return this.state == 3 ? true : false;
    };
    return BAR;
}(StrategySearch));
// 4. Clients couple strictly to the interface
function execute(strategy) {
    strategy.solve();
}
var algorithms = [new FOO(), new BAR()];
for (var i = 0; i < algorithms.length; i++) {
    execute(algorithms[i]);
}
