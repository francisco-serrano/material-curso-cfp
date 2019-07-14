class CustomError extends Error {
    constructor(message?: string) {
        super(message);

        this.name = CustomError.name;
    }
}

function sumarValores(valores: number[]): number {
    if (valores.length == 0)
        throw new CustomError('No se pueden sumar los valores de un arreglo vacío')
    
    let sumaTotal = 0;

    for (let i = 0; i < valores.length; i++)
        sumaTotal += valores[i];

    return sumaTotal;
}

let valores = [];
let resultado: number;

resultado = sumarValores(valores);

// try {
//     resultado = sumarValores(valores);
// } catch(error) {
//     console.log('Ocurrió un error esperado, seteando resultado en 0');
//     resultado = 0;
// }

console.log(resultado);