//uma das formas de comunicar erro
console.log('oi');

/*
function(){} ou ()=> - função anônima
não pode ser executada em outro momento

()=> - função anônima com arrow function

*/

document.querySelector('#robotron').addEventListener('click', function(evento){
    //para visualizar todos os ações que acontecem ao clicar o mouse
    console.log(evento);
});


dizOi();

dizOiNomeada('Renata');

/*
função declarada
Pode ser chamada mais vezes
*/

function dizOi(){
    console.log('oi');
    console.log('bem-vindo ao Robotron 2000');
}

/*
função nomeada que possui parâmetro
Há necessidade de informar 
*/
function dizOiNomeada(nome){
    console.log(nome);
    console.log('Olá! Bem-vindo ao RoboTRON 2000');
}

const subtrair = document.querySelector('#subtrair');
const somar=document.querySelector('#somar');

//usado data-controle para ficar mais dinâmico
const controle=document.querySelectorAll('[data-controle]');
//aparecerá todos que possuírem data-controle
console.log(controle);

const estatisticas= document.querySelectorAll('[data-estatistica]');
//para verificar se foram 
console.log(estatisticas);

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}



controle.forEach((elemento)=>{
    //aparece todos os elementosque possuem a classe "controle-ajuste"
    console.log(elemento);
    elemento.addEventListener('click',(evento)=>{
        //mostra o elemento
        console.log(evento.target);
        //mostra o elemento pai
        console.log(evento.target.parentNode);
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
    })
});
/*
código utilizado no decorrer da programação que ficou obsoleto

somar.addEventListener('click',manipulaDados('somar'));
subtrair.addEventListener('click',manipulaDados('subtrair'));

*/

const botaoCor= document.querySelectorAll('[data-botao_cor]');

botaoCor.forEach((elemento)=>{
    //para verificar se está puxando um botão de cada vez
    console.log(elemento);
    elemento.addEventListener('click', (atributo)=>{
        //para verificar se retorna o valor da cor
        console.log(atributo.target.dataset.botao_cor);
        //para capturar a tag para alterar o link da imagem
        const imagemRobo=document.getElementById('robotron');
        //para verificar se puxa o endereço em que está a imagem
        console.log(imagemRobo.src);
        //para alterar a imagem quando escolher a cor
        imagemRobo.src=`img/Robotron 2000 - ${atributo.target.dataset.botao_cor}.png`;
    })
})


function manipulaDados(operação, controle){
    const peca= controle.querySelector('[data-contador]');
    //mostra o conteudo da variável peca - contador da peça correspondente
    console.log(peca);

    if(operação==="-"){
        peca.value=parseInt(peca.value)-1;
    }else{
        peca.value=parseInt(peca.value)+1;
    }
}

function atualizaEstatisticas(peca){
    //para visualizar o item envolvido na função
    console.log(pecas[peca]);

    estatisticas.forEach((elemento)=>{
        //retorna a descrição de força, poder, energia e velocidade de um elemento
        console.log(elemento.dataset.estatistica);
        //retorna o valor da força, poder, energia e velocidade de um elemento
        console.log(elemento.textContent);
        elemento.textContent = parseInt(elemento.textContent)+pecas[peca][elemento.dataset.estatistica];
    })
}

