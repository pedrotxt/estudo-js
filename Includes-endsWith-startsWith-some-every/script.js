// Aprendendo algumas funções facilitadoras do ES6 dentro do JS
// É algo que não precisamos ficar se matando para descobrir que se fosse para fazer de uma forma diferente essas funções ia ficar bem chatinho, e com essas funções podemos fazer em uma linha.

// Includes: ele vai verificar, seja numa String, Array, Array de Objetos, ele verifica se aquilo que digitamos dentro do Includes possui dentro do que estamos mandando, exemplo:
let nomes = ['Pedro', 'Lucas', 'João'];
let nome = ['Matheus'];

// Caso não utilizarmos o Includes, ia precisar de um for, um laço de repetição para passar por todos os itens e ai verificar se realmente existe um 'Lucas' na variavel nomes.
// Verificando se tem 'Lucas' ali dentro
console.log(nomes.includes('Pedr'));
// Uma verificação de true ou false 

if (nomes.includes('Maria')){
    console.log('PEDRO ESTÁ NA LISTA!');
}else {
    console.log('PEDRO NÃO ESTÁ NA LISTA!')
}

// Utlizando do endsWith: Caso o item acabe com o valor passado
// Utilizando do startWith: Caso o item começe com o valor passado

// Dando erro: verificar depois /
// Uncaught TypeError: nome.endsWith is not a function
//console.log(nome.endsWith('eus'));
// Uncaught TypeError: nome.startWith is not a function
//console.log(nome.startWith('Math'));

// SOME: como podemos verificar caso aja apenas uma pessoa chamada Lucas no array;
console.log(nomes.some(nome2 => nome2 === 'Lucas')); 

// EVERY: como podemos verificar a idade de todos no array;
// vou utilizar um array de objetos para ficar melhor.
let arrayObjetos = [
    {
        nomeCompleto: 'Pedro',
        idade: 20
    },
    {
        nomeCompleto: 'Lua',
        idade: 17
    },
    {
        nomeCompleto: 'Isa',
        idade: 19
    }
];

// vai retornar false pois nem todos(every) os usuarios tem mais de 18 anos
console.log(arrayObjetos.every(usuario => usuario.idade >= 18));

if (arrayObjetos.every(usuario => usuario.idade >= 18)){
    console.log('Todos são maiores de 18');
} else{
    console.log('Alguem é de menor');
};
