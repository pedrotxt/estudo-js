function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses(){
    // toggle vai adicionar o dark-mode caso ele não ele tenha essa classe no button, no h1, no body e no footer
    // caso ja exista o dark-mode ele vai remover a classe
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText(){
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode"
    if (body.classList.contains(darkModeClass)) {
        h1.innerHTML = darkMode + " ON";
        button.innerHTML = lightMode;
    } else {
        h1.innerHTML = lightMode + " ON";
        button.innerHTML = darkMode;
    }
}

const darkModeClass = 'dark-mode'
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
// Esse tipo de chamada retorna a lista inteira do body num array
// Então precisamos colocar o index do body, como existe só um body o index vai ser 0
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode)