
function adicionar(...numeros){

    // utilizando o reduce para explicar uma função anonima
    // reduce visto e explicado em operacao-em-array

    // ao inves de criarmos uma função separada, por exemplo: function soma() e fazer todo o processo do reduce aqui, pegamos e criamos ja ali e ja passamos uma função ali dentro.

//     let total = numeros.reduce(function(total, proximo){
//         return total + proximo;
//     });

    // o que podemos fazer para reduzir mais ainda esse codigo? removendo a function(total, proximo), onde não preciso passar ele ali. Exemplo:
    // na frente dos parenteses colocar o sinal de igual e a seta para o lado
    // quando fazemos isso, utilizamos função anonima também

//   let total = numeros.reduce((total, proximo) =>{
//        let soma = total + proximo;
//        return soma;
//    });

    // quando existe apenas uma linha por exemplo, sem estar definindo variavel ou etc, apenas pegando o total e somando com o proximo, podemos reduzir mais ainda

    let total = numeros.reduce((total, proximo) => total + proximo);

     console.log(total);
}

adicionar(1, 2, 3, 4, 5);