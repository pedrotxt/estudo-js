const pessoa = {
    nome: "Pedro",
    sobrenome: "Henrique",
    idade: 20,
    cargo: "Desenvolvedor"
};

// Pegando do objeto pessoa o elemento nome e criando uma variavel nome com os mesmos valores passados no objeto.
let {nome} = pessoa;

let {idade, cargo} = pessoa;

// Dando outo nome para a variavel
let {cargo: programador} = pessoa;

// Alterando o valor da variavel
cargo = Louco;

// Criando um array
let usuario = ['Pedro', 'Henrique', 20, "Desenvolvedor"];

// Existem 2 opções de pegar, pegando pela posição do array [0, 1, 2, 3], ja que não existe chave igual no exemplo acima, que as chaves seriam nome, sobrenome e etc...
// 1 Maneira
let {1: segundonome} = usuario;

// 2 Maneira
let [primeironome, segundo] = usuario;
