
// pegar no meu documento html o id btn-clicou e adicionar um evento que ao clicar ele vai fazer a função de exibir um alerta
// o addEventListiner precisa passar o tipo de evento, no caso eu passei o 'click' e atribiu uma função a ele
document.getElementById('btn-clicou').addEventListener('click', function(){
    const nomeCompleto = document.getElementById('nome-completo').value;
    const numeroLetras = document.getElementById('nome-completo').
    //alert (`O nome completo é: ${nomeCompleto}`);
    alert ('O nome completo é: ' + nomeCompleto)
});