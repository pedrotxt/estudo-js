//Crie uma função que retorne o nome dos membros de um MAP que tem o papel de 'admin' no sistema.

let admins = [];
function getAdmins(map){
    for([key, value] of map){
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

//criando nosso Map
const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Pedro', 'User');

console.log(getAdmins(usuarios));