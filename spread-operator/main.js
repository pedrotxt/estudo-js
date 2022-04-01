// Exemplo utilizando um array
let primeiros = [1, 2, 3];
primeiros;

// Eu quero que esse array tenha também os primeiros numeros
// let numeros = [4, 5, 6];

// Então ao inves de dar todo aquele push, usamos spread operator
let numeros = [...primeiros, 4, 5, 6];
numeros;

// Agora um exemplo utilizando Objeto
let pessoa = {
    nome: "Pedro",
    idade: 20,
    cargo: "Programador"
}

let novaPessoa = {
    ...pessoa,
    anoAtual: 2050,
    cidade: "São Paulo"
}

// Jutando os dois objetos
novaPessoa;