const addTask = document.querySelector('.app__button--add-task');
const teto = document.querySelector('.app__form-add-task');
const poema = document.querySelector('.app__form-textarea');
let sS = JSON.parse(localStorage.getItem('tarefas')) || [];
// num to criativo hj
const ueliton = document.querySelector('.app__section-task-list');
const catalao = document.querySelector('.app__section-active-task-description');
let kiko = null;
let rikiko = null;
const malfeitoFeito = document.querySelector('#btn-remover-concluidas');
const qSeFodaTd = document.querySelector('#btn-remover-todas');
// depósito de lets e consts ali em cima

function newHome() {
    localStorage.setItem('tarefas', JSON.stringify(sS));
}


function pcd(wIHTD) {
    const brittos = document.createElement('li');
    brittos.classList.add('app__section-task-list-item');
    const swwet = document.createElement('svg');
    swwet.innerHTML = `
            <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
    `;
    const spoon = document.createElement('p');
    spoon.classList.add('app__section-task-list-item-description');
    spoon.textContent = wIHTD.descricao;
    const norton = document.createElement('button');
    norton.classList.add('app_button-edit');

    norton.onclick = () => {
        const newcorn = prompt('O que você quer editar?');
        if(newcorn){
           spoon.textContent = newcorn;
        wIHTD.descricao = newcorn;
        newHome(); 
        }
    }

    const nnenorton = document.createElement('img');
    nnenorton.setAttribute('src', 'imagens/edit.png');
    norton.append(nnenorton);

    brittos.append(swwet);
    brittos.append(spoon);
    brittos.append(norton);

    if(wIHTD.completa) {
        brittos.classList.add('app__section-task-list-item-complete');
        norton.setAttribute('disabled', 'disabled');
    } else{
    brittos.onclick = () => {
         document.querySelectorAll('.app__section-task-list-item-active')
         .forEach(item => {
             item.classList.remove('app__section-task-list-item-active');
          });
        if(kiko == wIHTD){
            catalao.textContent = '';
            kiko = null;
            rikiko = null;
            return;
        }
        kiko = wIHTD;
        rikiko = brittos;
        catalao.textContent = wIHTD.descricao;
   
        brittos.classList.add('app__section-task-list-item-active');
    }
    }

   

    return brittos;
}



addTask.addEventListener('click', () => {
    teto.classList.toggle('hidden');
})

teto.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const wIHTD = {
        descricao: poema.value
    }
    sS.push(wIHTD);

    const pnc = pcd(wIHTD);
    ueliton.append(pnc);
    newHome();
    poema.value = '';
    teto.classList.add('hidden');
})

sS.forEach(wIHTD => {
    const pnc = pcd(wIHTD);
    ueliton.append(pnc);
});


document.addEventListener('FokuEnded', () =>{
    if(kiko && rikiko) {
        rikiko.classList.remove('app__section-task-list-item-active');
        rikiko.classList.add('app__section-task-list-item-complete');
        rikiko.querySelector('button').setAttribute('disabled', 'disabled');
        kiko.completa = true;
        newHome();
    }
})

const byeSchool = (soCompleta) =>{
    // const selequiti = soCompleta ? '.app__section-task-list-item-complete' : '.app__section-task-list-item';
    let selequiti = '.app__section-task-list-item';
    if (soCompleta){
        selequiti = '.app__section-task-list-item-complete';
    }
    document.querySelectorAll(selequiti).forEach(elemento =>{
        elemento.remove();
    })
    sS = soCompleta ? sS.filter(elemento => !elemento.completa) : [];
    newHome();
}

malfeitoFeito.onclick = () => byeSchool(true);
qSeFodaTd.onclick = () => byeSchool(false);


// ctrl + f = pesquisa de elemento qlqr;
// ctrl + p = pesquisa file (bom com ctrl +b);