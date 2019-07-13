function calcularPromedio(arrValores) {
    var resultado = 0;
    for (var i = 0; i < arrValores.length; i++)
        resultado += arrValores[i];
    resultado /= arrValores.length;
    return resultado;
}
var arrValores = [1, 2, 3, 4, 5, 6];
console.log(calcularPromedio(arrValores));
