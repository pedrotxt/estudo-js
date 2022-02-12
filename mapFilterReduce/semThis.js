// Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.

//const array = [1, 2, 3, 4, 5];
//console.log(array.map((item) => item * 2));
//console.log(array);

function mapSemThis(arr){
    return arr.map(function(item) {
        return item * 2
    })
}

const array = [1, 2, 3, 4, 5];
console.log(mapSemThis(array));

console.log(array);