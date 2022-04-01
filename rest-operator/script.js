
function cadastrar(usuarios, ...novosUsuarios){

    let totalUsuarios = [
        ...usuarios,
        ...novosUsuarios
    ];

    return console.log(totalUsuarios);
}

let usuarios = ["Pedro", "Lua"];

let novosUsuarios = cadastrar(usuarios, "Isa", "Lucas");