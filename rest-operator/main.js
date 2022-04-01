// Criando uma função de Lista

// Para a minha funcão saber quantos nomes ela vai receber e não pegar apenas o primeiro passado, vamos utilizar do Rest Operator
// function minhaLista(nomes){
//    console.log(nomes);
// }
// Passa apenas o Pedro no console log
//minhaLista("Pedro", "Luana", "Isa");

// Agora utilizando o Rest Operator
// Também serve para Numbers, não apenas Strings
function minhaLista(...nomes){
    console.log(nomes);
}
// Agora sim ele passa todos os nomes
minhaLista("Pedro", "Luana", "Isa");