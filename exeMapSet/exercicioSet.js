//Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.

//criando Array
const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);


    // quando retornar, vai ser dentro de um array usando o argumento spread "..."
    return [...mySet];
}

console.log(valoresUnicos(meuArray));