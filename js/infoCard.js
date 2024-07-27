'use strict'

const bancoDeDados = [
    {
        "id": '1',
        "nome": 'pokeApi',
        "pasta": 'pokeapi',
        "img": 'capa',
        "filter": 'api',
        "imagens": [
            'poke-agenda-home.png',
            'poke-agenda-pokemons.png',
            'poke-agenda-berryes.png',
            'poke-agenda-geração-3.png',
            'poke-agenda-movimentos.png',
            'poke-agenda-natureza.png',
            'poke-agenda-pesquisa.png',
            'poke-agenda-tipo-normal.png',
            'poke-agenda-versus.png',
        ],
        "descricao": 'projeto criado da api de pokemon.',
        "ferramentas": 'html, css, js, database',
        "responsivo": 'checked',
        "hospedado": 'checked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'https://github.com/everson296/PokeApi',
        "urlSite": 'https://everson296.github.io/PokeApi/',
    },
    {
        "id": '2',
        "nome": 'game boy',
        "pasta": 'gameBoy',
        "img": 'capa',
        "filter": 'css',
        "imagens": [ ],
        "descricao": 'um passa tempo para melhorar meu css.',
        "ferramentas": 'html, css',
        "responsivo": 'checked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'https://github.com/everson296/GameBoy-css',
        "urlSite": 'none',
    },
    {
        "id": '3',
        "nome": 'site da loja da Playstation',
        "pasta": 'jogo_2',
        "img": 'capa',
        "filter": 'js',
        "imagens": [
            'parte1.png',
            'parte2.png',
            'parte3.png',
            'parte4.png'
        ],
        "descricao": 'site para treinar javascript.',
        "ferramentas": 'html, css, js',
        "responsivo": 'checked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'https://github.com/everson296/PlayStationShop',
        "urlSite": 'none',
    },
    {
        "id": '4',
        "nome": 'site de animes',
        "pasta": 'animes',
        "img": 'capa',
        "filter": 'bdd',
        "imagens": [ ],
        "descricao": 'site para ver meus animes favoritos, qual estou assisitindo e qual irei ver depois.',
        "ferramentas": 'html, css, js, database',
        "responsivo": 'unchecked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'https://github.com/everson296/site-de-animes',
        "urlSite": 'none',
    },
    {
        "id": '5',
        "nome": 'mecanica',
        "pasta": 'mecanica',
        "img": 'capa',
        "filter": 'css',
        "imagens": [ ],
        "descricao": 'site para uma mecanica.',
        "ferramentas": 'html, css',
        "responsivo": 'checked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'https://github.com/everson296/Mecanica',
        "urlSite": 'none',
    },
    {
        "id": '6',
        "nome": 'Jogo da memoria',
        "pasta": 'jogo_da_memoria',
        "img": 'capa',
        "filter": 'js',
        "imagens": [ ],
        "descricao": 'jogo da memoria.',
        "ferramentas": 'html, css, js',
        "responsivo": 'checked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'https://github.com/everson296/Jogo-da-memoria',
        "urlSite": 'none',
    },
    {
        "id": '7',
        "nome": 'Light & Shadow Text',
        "pasta": 'Light_and_Shadow_Text',
        "img": 'capa',
        "filter": 'js',
        "imagens": [ ],
        "descricao": 'site que muda o boxshadow de acordo com a posição do mouse.',
        "ferramentas": 'html, css, js',
        "responsivo": 'checked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'https://github.com/everson296/Light-And-Shadow',
        "urlSite": 'none',
    },
    {
        "id": '8',
        "nome": 'calculadora',
        "pasta": 'calculadora',
        "img": 'capa',
        "filter": 'css',
        "imagens": [ ],
        "descricao": 'calculadora feita com CSS puro.',
        "ferramentas": 'html, css',
        "responsivo": 'checked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'https://github.com/everson296/Calculadora-css',
        "urlSite": 'none',
    },
    {
        "id": '9',
        "nome": 'cod',
        "pasta": 'cod',
        "img": 'capa',
        "filter": 'css',
        "imagens": [ ],
        "descricao": 'site do jogo call of duty.',
        "ferramentas": 'html, css',
        "responsivo": 'checked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'none',
        "urlSite": 'none',
    },
    {
        "id": '10',
        "nome": 'paint_click',
        "pasta": 'paint_click',
        "img": 'capa',
        "filter": 'js',
        "imagens": [ ],
        "descricao": 'clicar e pintar.',
        "ferramentas": 'html, css, js',
        "responsivo": 'checked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'none',
        "urlSite": 'none',
    },
    {
        "id": '11',
        "nome": 'filtro de imagens',
        "pasta": 'filtro',
        "img": 'capa',
        "filter": 'js',
        "imagens": [ ],
        "descricao": 'filtro com css.',
        "ferramentas": 'html, css',
        "responsivo": 'checked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'none',
        "urlSite": 'none',
    },
    {
        "id": '12',
        "nome": 'responsive image slide',
        "pasta": 'responsive_image_slide',
        "img": 'capa',
        "filter": 'js',
        "imagens": [ ],
        "descricao": 'slide responsivo e altomatico.',
        "ferramentas": 'html, css, js',
        "responsivo": 'checked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'https://github.com/everson296/Responsive-image-slide',
        "urlSite": 'none',
    },
    {
        "id": '13',
        "nome": 'lampada',
        "pasta": 'lampada',
        "img": 'capa',
        "filter": 'js',
        "imagens": [ ],
        "descricao": 'projeito feito no SENAI para aprender javascript.',
        "ferramentas": 'html, css',
        "responsivo": 'checked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'https://github.com/everson296/Lampada-senai',
        "urlSite": 'none',
    },
    {
        "id": '14',
        "nome": 'musica',
        "pasta": 'musica',
        "img": 'capa',
        "filter": 'css',
        "imagens": [ ],
        "descricao": 'site de musica.',
        "ferramentas": 'html, css',
        "responsivo": 'unchecked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'none',
        "urlSite": 'none',
    },
    {
        "id": '15',
        "nome": 'musica 2',
        "pasta": 'musica_2',
        "img": 'capa',
        "filter": 'css',
        "imagens": [ ],
        "descricao": 'site de musica.',
        "ferramentas": 'html, css',
        "responsivo": 'chuncheckedecked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'https://github.com/everson296/site-de-musica',
        "urlSite": 'none',
    },
    {
        "id": '16',
        "nome": 'Contador Simples',
        "pasta": 'contador_simples',
        "img": 'capa',
        "filter": 'js',
        "imagens": [ ],
        "descricao": 'contador simples feito com javascript.',
        "ferramentas": 'html, css, js',
        "responsivo": 'checked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'https://github.com/everson296/Contador-Simples',
        "urlSite": 'none',
    },
    {
        "id": '17',
        "nome": 'portfolio',
        "pasta": 'portfolio',
        "img": 'capa',
        "filter": 'dbb',
        "imagens": [
            'portfolio-inicio.png',
            'portfolio-cards.png',
            'title.png',
         ],
        "descricao": 'portfolio para mostrar alguns dos meus projetos já feitos.',
        "ferramentas": 'html, css, js, database',
        "responsivo": 'checked',
        "hospedado": 'checked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'https://github.com/everson296/Portfolio',
        "urlSite": 'https://everson296.github.io/Portfolio/',
    },
    {
        "id": '18',
        "nome": 'randomColor',
        "pasta": 'randomColor',
        "img": 'capa',
        "filter": 'js',
        "imagens": [ ],
        "descricao": 'site para gerar uma cor aleatoria em HEX.',
        "ferramentas": 'html, css',
        "responsivo": 'checked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'https://github.com/everson296/Gerador-de-cor-aleatorio',
        "urlSite": 'none',
    },
    {
        "id": '19',
        "nome": 'rickAndMorty',
        "pasta": 'rickAndMorty',
        "img": 'capa',
        "filter": 'api',
        "imagens": [ 
            'inicio.png',
            'rick-and-morty-episodios.png',
            'rick-and-morty-locais.png',
            'rick-and-morty-personagens.png',
        ],
        "descricao": 'site para o consumo da api rickandmorty.',
        "ferramentas": 'html, css, js, database',
        "responsivo": 'checked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'https://github.com/everson296/Rick-and-Morty-Api',
        "urlSite": 'none',
    },
    {
        "id": '20',
        "nome": 'semaforo',
        "pasta": 'semaforo',
        "img": 'capa',
        "filter": 'js',
        "imagens": [ ],
        "descricao": 'projeto do SENAI com o intuito de aprender javascript.',
        "ferramentas": 'html, css',
        "responsivo": 'checked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'aaaaaaaaaaaaaaaaaa',
        "urlSite": 'none',
    },
    {
        "id": '21',
        "nome": 'shop',
        "pasta": 'shop',
        "img": 'capa',
        "filter": 'css',
        "imagens": [ ],
        "descricao": 'site para uma loja de roupas.',
        "ferramentas": 'html, css',
        "responsivo": 'checked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'none',
        "urlSite": 'none',
    },
    {
        "id": '22',
        "nome": 'steam website',
        "pasta": 'steam',
        "img": 'capa',
        "filter": 'bdd',
        "imagens": [ ],
        "descricao": 'site alternativo para ver o progresso dos seus jogos na steam.',
        "ferramentas": 'html, css',
        "responsivo": 'checked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'https://github.com/everson296/Steam-Website',
        "urlSite": 'none',
    },
    {
        "id": '23',
        "nome": 'tarefas',
        "pasta": 'tarefas',
        "img": 'capa',
        "filter": 'bdd',
        "imagens": [ ],
        "descricao": 'site para criar tarefas ou lembretes para o seu dia a dia.',
        "ferramentas": 'html, css',
        "responsivo": 'checked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'none',
        "urlSite": 'none',
    },
    {
        "id": '24',
        "nome": 'tv',
        "pasta": 'tv',
        "img": 'capa',
        "filter": 'css',
        "imagens": [ ],
        "descricao": 'telivisão feito com css puro, com intuito de apreimorar meu css.',
        "ferramentas": 'html, css',
        "responsivo": 'checked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'none',
        "urlSite": 'none',
    },
    {
        "id": '25',
        "nome": 'viacep',
        "pasta": 'viacep',
        "img": 'capa',
        "filter": 'bdd',
        "imagens": [ ],
        "descricao": 'consumo da apiViaCep.',
        "ferramentas": 'html, css',
        "responsivo": 'checked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'https://github.com/everson296/ViaCep-Api',
        "urlSite": 'none',
    },
    {
        "id": '26',
        "nome": 'preview image',
        "pasta": 'preview_image',
        "img": 'capa',
        "filter": 'js',
        "imagens": [ ],
        "descricao": 'site para ver a imagem antes de confirmar o envio.',
        "ferramentas": 'html, css, js',
        "responsivo": 'checked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'none',
        "urlSite": 'none',
    },
    {
        "id": '27',
        "nome": 'one piece',
        "pasta": 'one_piece',
        "img": 'capa',
        "filter": 'bdd',
        "imagens": [ 
            'luffy.png',
            'zoro.png',
            'sanji.png',
            'usopp.png',
            'chopper.png',
            'jimbe.png',
            'nami.png',
            'franky.png',
            'brook.png',
            'robin.png',
            'yamato.png',
        ],
        "descricao": 'site sobre o anime one piece.',
        "ferramentas": 'html, css, js',
        "responsivo": 'checked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'https://github.com/everson296/one_piece_website',
        "urlSite": 'none',
    },
    {
        "id": '28',
        "nome": 'Weather API',
        "pasta": 'Weather_api',
        "img": 'capa',
        "filter": 'api',
        "imagens": [ ],
        "descricao": 'site com consumo da Weather API.',
        "ferramentas": 'html, css, js, database',
        "responsivo": 'checked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'https://github.com/everson296/WeatherAPI',
        "urlSite": 'none',
    },
    {
        "id": '29',
        "nome": 'mini music play',
        "pasta": 'mini_music_play',
        "img": 'capa',
        "filter": 'js',
        "imagens": [ ],
        "descricao": 'mini reprodutor de musica.',
        "ferramentas": 'html, css, js',
        "responsivo": 'checked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'https://github.com/everson296/Mini_Music_Play',
        "urlSite": 'none',
    },
    {
        "id": '30',
        "nome": 'pedra, papel, tesoura',
        "pasta": 'pedra-papel_tesoura',
        "img": 'capa',
        "filter": 'js',
        "imagens": [ ],
        "descricao": 'jogo pedra papel tesoura.',
        "ferramentas": 'html, css, js',
        "responsivo": 'checked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'https://github.com/everson296/paper_rock_scissors',
        "urlSite": 'none',
    },
    {
        "id": '31',
        "nome": 'Copia Epic games',
        "pasta": 'epic_games',
        "img": 'capa',
        "filter": 'css',
        "imagens": [ 
            'inicio.png',
            'navegar.png',
            'noticias.png',
        ],
        "descricao": 'copia do dite oficial da epic games.',
        "ferramentas": 'html, css',
        "responsivo": 'unchecked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'none',
        "urlSite": 'none',
    },
    {
        "id": '32',
        "nome": 'game library',
        "pasta": 'game_library',
        "img": 'capa',
        "filter": 'css',
        "imagens": [ ],
        "descricao": 'site para gerenciamento dos seus jogos.',
        "ferramentas": 'html, css',
        "responsivo": 'checked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'none',
        "urlSite": 'none',
    },
    {
        "id": '33',
        "nome": 'The last of us',
        "pasta": 'the_last_of_us',
        "img": 'capa',
        "filter": 'css',
        "imagens": [ ],
        "descricao": 'site sobre o jogo "The Last Of Us" com o intuito de aprimorar meu CSS.',
        "ferramentas": 'html, css',
        "responsivo": 'unchecked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'aaaa',
        "urlSite": 'none',
    },
    {
        "id": '34',
        "nome": 'batman',
        "pasta": 'batman',
        "img": 'capa',
        "filter": 'css',
        "imagens": [ ],
        "descricao": 'site com o intuito de aprimorar meu CSS.',
        "ferramentas": 'html, css',
        "responsivo": 'checked',
        "hospedado": 'unchecked',
        "tratamento_de_erros": 'checked',
        "intuitivo": 'checked',
        "urlRepositorio": 'aaaa',
        "urlSite": 'none',
    },
];

const balls = document.querySelector('.balls');
const prev = document.getElementById('prev')
const next = document.getElementById('next')

// Função para fazer o ".btnUp" aparecer em uma posição "X" //
window.addEventListener('scroll', () => {
    let scroll = document.querySelector('.btnUp')
    scroll.classList.toggle('btnUpActive', window.scrollY > window.innerHeight - 200)
})


document.getElementById('trabalhos').addEventListener('click', () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    })
})

// função para pegar id do localStorage
const pegarId = () => {
    var aValue = localStorage.getItem('idCard');
    // localStorage.removeItem('idCard');
    if (aValue === null) {
        window.location.assign("../index.html");
    } else {
        return aValue;
    }
}
var id = pegarId() - 1;

// função para criar a introdução do infoCard
const criarIntroducao = (banco) => {
    document.getElementById('title').innerHTML = `
        <h2> ${banco[id].nome} </h2>
        <p> ${banco[id].descricao} </p>
    `
    
    const images = banco[id].imagens
    if(images.length > 0){
        for(let i = 0; i <= images.length - 1; i++){
            document.getElementById('slider').innerHTML += `
                <img src="./../src/work/${banco[id].pasta}/imagens/${images[i]}">
            `
        }
    }else{
        document.getElementById('slider').innerHTML += `
            <img src="./../src/work/${banco[id].pasta}/${banco[id].img}.png">
        `

        balls.style.display = 'none'
        prev.style.display = 'none'
        next.style.display = 'none'
    }
    
    document.querySelectorAll('#slider img')[0].id = 'imgActive'
    
    const ferramentas = banco[id].ferramentas
    const arrayFerramentas = ferramentas.split(', ');
    
    for(let f = 0; f <= arrayFerramentas.length - 1; f++){
        document.getElementById('tecnologias').innerHTML += `
            <div class="cardTecnologia">
                <img src="./../src/icons/${arrayFerramentas[f]}.png"/>
            </div>
        `
    }
    
    var responsivo = () => {
        return banco[id].responsivo == 'checked' ? 'fa-check' : 'fa-xmark'
    }
    
    var hospedado = () => {
        return banco[id].hospedado == 'checked' ? 'fa-check' : 'fa-xmark'
    }
    
    var tratamento_de_erros = () => {
        return banco[id].tratamento_de_erros == 'checked' ? 'fa-check' : 'fa-xmark'
    }
    
    var intuitivo = () => {
        return banco[id].intuitivo == 'checked' ? 'fa-check' : 'fa-xmark'
    }
    
    document.getElementById('infoFerramentas').innerHTML = `
        <div class="infoFerramentasTitle">
            <p> responsivo </p>
            <i class="fa-solid ${responsivo()}"></i>
        </div>

        <div class="infoFerramentasTitle">
            <p> hospedado </p>
            <i class="fa-solid ${hospedado()}"></i>
        </div>

        <div class="infoFerramentasTitle">
            <p> tratamento de erros </p>
            <i class="fa-solid ${tratamento_de_erros()}"></i>
        </div>

        <div class="infoFerramentasTitle">
            <p> intuitivo </p>
            <i class="fa-solid ${intuitivo()}"></i>
        </div>
    `
}

const urlBtn = (banco) => {
    if(banco[id].urlRepositorio === 'none'){
        document.getElementById('btnGitHub').style.display = 'none'
    }else{
        document.getElementById('btnGitHub').href = `${banco[id].urlRepositorio}`
    }
    if(banco[id].urlSite === 'none'){
        document.getElementById('btnSite').style.display = 'none'
    }else{
        document.getElementById('btnSite').href = `${banco[id].urlSite}`
    }
}

criarIntroducao(bancoDeDados);
urlBtn(bancoDeDados);

var images = document.querySelectorAll('#slider img');
var cont = 0;
const imageActive = document.getElementById('imgActive');
let roll = true

for(let i = 0; i < images.length; i++){
    var div = document.createElement('div');
    div.id = i;
    balls.appendChild(div)
}

document.getElementById('0').classList.add('ballActive')

var position = document.querySelectorAll('.balls div')

for(let i = 0; i < position.length; i++){
    position[i].addEventListener('click', () => {
        cont = position[i].id
        roll = false
        slide()
    })
}

prev.addEventListener('click', () => {
    cont--
    roll = false
    slide()
})

next.addEventListener('click', () => {
    cont++
    roll = false
    slide()
})

const slide = () => {
    if(cont >= images.length){
        cont = 0;
    }else if(cont < 0){
        cont = images.length - 1
    }
    
    document.querySelector('.ballActive').classList.remove('ballActive');
    imageActive.style.marginLeft = -1200 * cont + 'px';
    document.getElementById(cont).classList.add('ballActive');
}

setInterval(() => {
    if(roll){
        cont++
        slide()
    }else{
        roll = true
    }
}, 2500)

window.addEventListener("scroll", () => {
    let infoTecnologiaAnime = document.querySelectorAll("#tecnologias .cardTecnologia");
    let infoFerramentasAnime = document.querySelectorAll("#infoFerramentas .infoFerramentasTitle");

    if(window.scrollY > 550){
        for (let i = 0; i < infoFerramentasAnime.length; i++) { 
            infoFerramentasAnime[i].classList.remove('leftCardEffect')
            infoFerramentasAnime[i].classList.add('rightCardEffect')
        }
    }else if(window.scrollY < 900){
        for (let i = 0; i < infoFerramentasAnime.length; i++) {
            infoFerramentasAnime[i].classList.remove('rightCardEffect')
            infoFerramentasAnime[i].classList.add('leftCardEffect')
        }
    }

    if(window.scrollY > 350){
        for (let i = 0; i < infoTecnologiaAnime.length; i++) {
            infoTecnologiaAnime[i].classList.remove('leftCardEffect')
            infoTecnologiaAnime[i].classList.add('rightCardEffect')
        }

    }else if(window.scrollY < 150){
        for (let i = 0; i < infoTecnologiaAnime.length; i++) {
            infoTecnologiaAnime[i].classList.remove('rightCardEffect')
            infoTecnologiaAnime[i].classList.add('leftCardEffect')
        }
    }
});