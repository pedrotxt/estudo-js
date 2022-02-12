const BASE_URL = 'https://cataas.com/cat?json=true';
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

// é uma função assincrona então tem que colocar o async
// A palavra async existe para definir funções assincronas
// arow function
const getCats = async () => {
    try{
    // ela vai ter os dados que vou chamar de data
    // vai ser um await e o fetch da nossa BASE_URL
    // o fetch que vai receber nossa URL
    const data = await fetch(BASE_URL);
   
    // nossa BASE_URL vai retornar outra Promise por conta do fetch
    // vamos receber uma string e precisamos converter para JSON
    const json = data.json();

    // vamos usar a webpurl ao inves da url da foto por se tratar de uma imagem comprimida ja que o jpg da foto é muito demorado para carregar
    return json.url;
    } catch(e){
        console.log(e.message);
    }
};

// sempre que a gente quise retornar a imagem vamos tar um await no getCats
const loadImg = async () => {
    // colocando a URL para chamar a imagem que estamos pegando na webpurl
    catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImg);

loadImg;