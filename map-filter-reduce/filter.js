
// não pode ser uma constante
//let numeros = [1, 2, 3, 4, 5];

//console.log(numeros.filter((item) => item % 2 === 0));
//caso queira uma constante
function filtraPares(array){

    // callback, eu posso criar uma function so para ele e chamar no filtraPares
    const filteredArr = array.filter((item) => item % 2 === 0);

    return filteredArr;
}

const numeros = [1, 2, 3, 4, 5]

console.log(filtraPares(numeros));
console.log(numeros);