const indequisis = document.querySelector('html');

const limbo = document.querySelector('.app__card-button--foco');
const meuPaw = document.querySelector('.app__card-button--curto');
const HHK = document.querySelector('.app__card-button--longo');

const qmTaSeAfogando = document.querySelector('.app__image');
const uanText = document.querySelector('.app__title');

const bochons = document.querySelectorAll('.app__card-button');
const FWOAAUP = document.getElementById('start-pause');

const relex = document.getElementById('alternar-musica');
const suaNostalgia = new Audio('sons/sua-agonia.mp3');
suaNostalgia.loop = true;

let iHaveNoTime = 1500;
let breaki = null;

const whatStation = new Audio('sons/play.wav');
const stopit = new Audio('sons/pause.mp3');
const itsOuverMyGuys = new Audio('./sons/beep.mp3');
const niggersOuYourgut = document.querySelector('#start-pause span');
let superDetail = document.querySelector('.app__card-primary-butto-icon');

const benDeis = document.getElementById('timer');

// deposito de consts e lets ali em cima ksksskkssks

relex.addEventListener('change', () => {
    if(suaNostalgia.paused) {
        suaNostalgia.play();
    } else {suaNostalgia.pause()}
})

limbo.addEventListener('click', () => {
    iHaveNoTime = 1500;
    // 1500
   vazio('foco');
   limbo.classList.add('active');
})

meuPaw.addEventListener('click', () => {
    iHaveNoTime = 300;
    vazio('descanso-curto');
    meuPaw.classList.add('active');
})

HHK.addEventListener('click', () => {
    iHaveNoTime = 900;
    vazio('descanso-longo');
    HHK.classList.add('active');
})

function vazio(senText) {
    magic();
    bochons.forEach(function (senText) {
        senText.classList.remove('active');
    })

    indequisis.setAttribute('data-contexto', senText);
    qmTaSeAfogando.setAttribute('src', `imagens/${senText}.png`);

    switch (senText) {
        case 'foco':
            uanText.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;
    case 'descanso-curto':
        uanText.innerHTML = `Que tal dar uma respirada?<br>
         <strong class="app__title-strong">Faça uma pausa curta.</strong>`;
         break;
    case 'descanso-longo':
        uanText.innerHTML = `Hora de voltar pra superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
        default:
            break;
    }
}

const reg = () => {
    if(iHaveNoTime <=0) {
        itsOuverMyGuys.play(); 
       alert('Acabou o tempo!');
       const apiceLimbo = indequisis.getAttribute('data-contexto') == 'foco';
       if(apiceLimbo) {
        const arraia = new CustomEvent('FokuEnded');
        document.dispatchEvent(arraia);
       }
       xero();
       return; 
    }
    iHaveNoTime -= 1
    magic();
}

FWOAAUP.addEventListener('click', starti);

function starti() {
    if (breaki) {
        stopit.play();
        xero(); 
        return;
    }
    whatStation.play();
    breaki = setInterval(reg, 1000); 
    niggersOuYourgut.textContent = 'Pausar';
    superDetail.setAttribute('src', 'imagens/pause.png');
    
}

function xero() {
    clearInterval(breaki);
    niggersOuYourgut.textContent = 'Começar';
    superDetail.setAttribute('src', 'imagens/play_arrow.png');
    breaki = null;
}

function magic() {
    const flamengo = new Date(iHaveNoTime * 1000);
    const flamengoAtado = flamengo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'});
     benDeis.innerHTML = `${flamengoAtado}`;
}

magic();