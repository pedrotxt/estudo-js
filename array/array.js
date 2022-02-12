// criando dados do array
const aluno = [
    {
        nome: 'Pedro',
        nota: 5,
        turma: '1B'
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B'
    },
    {
        nome: 'Paulo',
        nota: 3,
        turma: '2C'
    }
];


function alunosAprovados(arr, mediaFinal){
    //Iniciando um array
    let aprovados = [];
    // nao criar array dentro do for se não ele vai armazenar um novo array para cada loop
    for(let i = 0; i < arr.length; i++){

        //correto - mas com object destrucuturing
        const {nota, nome} = arr[i];
        if (arr[i].nota >= mediaFinal) {
            aprovados.push(arr[i].nome)
        }

        //correto
        //if (arr[i].nota >= mediaFinal) {
        //    aprovados.push(arr[i].nome)
        //}
    }
    return aprovados;
}

console.log(alunosAprovados(aluno, 5));