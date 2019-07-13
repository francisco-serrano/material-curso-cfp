function calcularPromedio(arrValores: number[]): number {
    let resultado: number = 0;

    for (let i = 0; i < arrValores.length; i++)
        resultado += arrValores[i];

    resultado /= arrValores.length;

    return resultado;
}

let arrValores: number[] = [1, 2, 3, 4, 5, 6];

console.log(calcularPromedio(arrValores));