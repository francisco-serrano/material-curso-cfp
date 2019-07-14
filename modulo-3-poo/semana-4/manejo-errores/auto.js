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
var CustomError = /** @class */ (function (_super) {
    __extends(CustomError, _super);
    function CustomError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = CustomError.name;
        return _this;
    }
    return CustomError;
}(Error));
function sumarValores(valores) {
    if (valores.length == 0)
        throw new CustomError('No se pueden sumar los valores de un arreglo vacío');
    var sumaTotal = 0;
    for (var i = 0; i < valores.length; i++)
        sumaTotal += valores[i];
    return sumaTotal;
}
var valores = [];
var resultado;
resultado = sumarValores(valores);
// try {
//     resultado = sumarValores(valores);
// } catch(error) {
//     console.log('Ocurrió un error esperado, seteando resultado en 0');
//     resultado = 0;
// }
console.log(resultado);
