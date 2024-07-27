'use strict';


const bancoDeDados = [
    {
        "id": '1',
        "nome": 'pokeApi',
        "pasta": 'pokeapi',
        "img": 'capa',
        "filter": 'api',
        "imagens": [
            'poke-agenda-home',
            'poke-agenda-pokemons',
            'poke-agenda-berryes',
            'poke-agenda-geração-3',
            'poke-agenda-movimentos',
            'poke-agenda-natureza',
            'poke-agenda-pesquisa',
            'poke-agenda-tipo-normal',
            'poke-agenda-versus',
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
            'parte1',
            'parte2',
            'parte3',
            'parte4'
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
            'portfolio-inicio',
            'portfolio-cards',
            'title',
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
            'inicio',
            'rick-and-morty-episodios',
            'rick-and-morty-locais',
            'rick-and-morty-personagens',
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
            'luffy',
            'zoro',
            'sanji',
            'usopp',
            'chopper',
            'jimbe',
            'nami',
            'franky',
            'brook',
            'robin',
            'yamato',
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
            'inicio',
            'navegar',
            'noticias',
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

// Função para fazer o ".btnUp" aparecer em uma posição "X" //
window.addEventListener('scroll', () => {
    let scroll = document.querySelector('.btnUp')
    scroll.classList.toggle('btnUpActive', window.scrollY > window.innerHeight)
})

document.getElementById('trabalhos').addEventListener('click', () => {
    window.scrollTo({
        top: window.innerHeight - 80,
        behavior: 'smooth'
    })
})

// criar card //
const ShowCard = (banco) => {
    const container = document.getElementById('container');
    for(let i = 0; i < bancoDeDados.length; i++){
        container.innerHTML+=`
            <div class="card" data-item="${banco[i].filter}">
                <img src="./src/work/${banco[i].pasta}/${banco[i].img}.png"/>
                
                <div class="infoCard">
                    <div class="title"> ${banco[i].nome} </div>
                    <div class="btn" class="link">ver mais</div>
                </div>

                <div class="clickCard" id="${banco[i].id}"></div>
            </div>
        `;    
    }
}

ShowCard(bancoDeDados);

// menu scroll //
let menu = document.querySelectorAll(".itensFilter");   
let card = document.querySelectorAll(".card");

for(let i = 0;i < menu.length; i++ ){
    menu[i].addEventListener('click', () => {
       for(let j = 0; j < menu.length; j++){
           menu[j].classList.remove('active');
       } 
        menu[i].classList.add('active');
        let datafilter = menu[i].getAttribute('data-filter');
        for(let k = 0; k < card.length; k++){
            card[k].classList.remove('active');
            card[k].classList.add('hide');
            if(card[k].getAttribute('data-item') == datafilter || datafilter == "all"){
                card[k].classList.remove('hide');
            }
        }
    })
}

document.querySelectorAll('#container .card').forEach((card) => {
    card.addEventListener('click', (e) => {
        localStorage.setItem('idCard', e.target.id);  
        window.location.assign("./pages/infocard.html");
    })
});