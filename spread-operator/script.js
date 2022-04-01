function cadastroPessoa(info){
    let novosDados = {
        ...info, 
        cargo: 'Programador',
        status: 1,
        codigo: '508i923'
    }
    return novosDados;
}
console.log(cadastroPessoa({nome: 'Pedro', sobrenome: 'Henrique', anoInicio: 2050}));