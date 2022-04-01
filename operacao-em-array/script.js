// Aprender a fazer Operações dentro de um vetor, um array e etc...
// Antes do ES6, precisavamos utilizar um loop ou um for para de alguma forma percorrer uma lista e utilizar os dados dela de forma certa, e com o ES6 temos algumas funcionalidades que fica muito mais pratica para percorrer, filtrar, fazendo de uma forma muito mais pratica e menos verbosa

const lista = [1, 2, 3, 4, 5, 6];

// Map serve para percorrer todos os item do nosso vetor(da nossa lista) e retornar algo que queremos fazer
// dentro da função lista.map() existe outra função que passamos um item, esse item é todo o item, todos os valores da nossa lista, e graças ao map ele vai percorrer todos.

// 1 EXEMPLO:

// const novaLista = lista.map(function(item){
    // dentro da function lista.map podemos por exemplo:
    //return item * 5;
    // percorrendo todos os itens da lista e fazendo vezes 5
//});

//console.log(novaLista);

// 2 EXEMPLO:

// podemos passar um index também, que é a posição em que o item da lista está
 const novaLista = lista.map(function(item, index){
    // dentro da function(item, index) podemos por exemplo:
    return item + index;
    // percorrendo todos os itens da lista e fazendo vezes 5
});

console.log(novaLista);

// REDUCE:

// Agora usando o reduce para somar todos os item dessa lista de uma forma mais prática.
const soma = lista.reduce(function(total, proximoItem){
    return total + proximoItem;
});
// o que ele ta fazendo? pegando o total, que é 0 agora, e ta somando com o proximo item, que é 1 por exemplo, e vai somando o total com o proximo item 

console.log(soma);

// FIND:

// Agora usando o find para achar algum item que tem ali dentro de uma forma muito fácil.
const find = lista.find(function(item){
    return item === 6;
});
// Depois de procurar o 6 nos itens da lista, vai aparecer no console caso exista.
console.log(find);