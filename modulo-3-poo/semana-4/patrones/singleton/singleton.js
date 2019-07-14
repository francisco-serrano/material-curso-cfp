var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        return Singleton.instance;
    };
    Singleton.instance = new Singleton();
    return Singleton;
}());
