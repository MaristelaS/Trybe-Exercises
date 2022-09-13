/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-param-reassign */
// retorna o Primeiro elemento com o Id passado
const byId = document.getElementById('divUm');
// retorna todos os elementos com a tag passada
const byTag = document.getElementsByTagName('div');
// retorna o primeiro elemento que safisfação a condição
const queryId = document.querySelector('#divTres');
// retorna o primeiro elemento que safisfação a condição
const queryClass = document.querySelector('.container');
// retorna todos os elementos que safisfação a condição
const queryAll = document.querySelectorAll('.container');
// retorna todos os elementos que tenham a classe passada
const byClass = document.getElementsByClassName('container');

// seletores dos botoes
const btnbyId = document.getElementById('byId');
const btnbyTag = document.getElementById('byTag');
const btnqueryId = document.getElementById('queryId');
const btnqueryClass = document.getElementById('queryClass');
const btnqueryAll = document.getElementById('queryAll');
const btnbyClass = document.getElementById('byClass');

// funcionamento do getElementById
btnbyId.addEventListener('click', function () {
    console.log('byId', byId);
    console.log('byId.length', byId.length);
    console.log('byId text', byId.innerText);
});

// funcionamento do QuerySelector passando um ID
btnqueryId.addEventListener('click', function () {
    console.log('queryId', queryId);
    console.log('queryId.length', queryId.length);
    console.log('queryId text', queryId.innerHTML);
    console.log('queryId pai', queryId.parentElement);
});

// funcionamento do getElementsByTagName
btnbyTag.addEventListener('click', function () {
    console.log('byTag', byTag);
    console.log('byTag.length', byTag.length);
    console.log('byTag text', byTag.innerText);
    console.log('byTag umText', byTag[0].innerHTML);
    console.log('byTag doisText', byTag[1].innerText);
});

// funcionamento do document.getElementsByClassName
btnbyClass.addEventListener('click', function () {
    console.log('byClass', byClass);
    console.log('byClass.length', byClass.length);
    console.log('byclass text', byClass.innerText);
    console.log('byclass umText', byClass[0].innerText);
    console.log('byclass umhtml', byClass[0].innerHTML);
    console.log('byclass pai', byClass[0].parentElement);
});

// funcionamento do QuerySelectorAll passando uma classe
btnqueryAll.addEventListener('click', function () {
    console.log('queryAll.length', queryAll.length);
    console.log('queryAll', queryAll);
    console.log('queryAll text', queryAll.innerText);
    // console.log('queryAll [0]]Text', queryAll[0].innerText);
    // console.log('queryAll [0]html', queryAll[0].innerHTML);
    // console.log('queryAll [0]pai', queryAll[0].parentElement);
});

btnqueryClass.addEventListener('click', function () {
    console.log('queryClass', queryClass);
    console.log('queryClass.length', queryClass.length);
    console.log('queryclass', queryClass.innerText);
});

// funcionamento do QuerySelector passando uma classe
queryClass.addEventListener('click', function (event) {
    // imprime o evento/ação que acnteceu
    console.log('event', event);
    // imprime o elemento onde a ação aconteceu
    // funciona semelhante a um getElementById
    console.log('event.target', event.target);
    console.log(event.target.classList);
    event.target.innerText = event.target.innerText.toUpperCase();
    // byId.innerText = event.target.innerText.toUpperCase();
});

// TESTE 1
// diferença entre htmlCollection e nodeList

// const testeBy = document.getElementsByClassName('teste');
// const testeQuery = document.querySelectorAll('.teste');

// console.log('teste', testeBy, testeQuery);

// funcão que vai ser disparad quando o evento ocorrer
// const funcaoDoEvento = (event) => {
//     event.target.classList.remove('teste');
//     console.log(`Teste${1}`, testeBy, testeQuery);
// }

// laço de repetição que vai adicionar um escutador de evento a cada um dos elementos com a classe teste
// for (let index = 0; index < testeQuery.length; index += 1) {
//     testeQuery[index].addEventListener('click', funcaoDoEvento);
// }

// TESTE 2
// adicionando e recuperando informações do storage
const addNoStorage = document.getElementById('addNoStorage');
const pegaDoStorage = document.getElementById('pegaDoStorage');
const h3 = document.getElementById('h3');

addNoStorage.addEventListener('click', function () {
    // tag[3] é o 4 elemento retornado pelo getElementsByTagname('div')
    const conteudoASerSalvo = byTag[3].innerText;
    // setItem é uma função/metodo do localstorage que recebe 2 parametros, o primeiro é a chave (valor que vai ser usado como identificador dos dados) e o segundo parametro são os dados que vão ser armazenados
    // lembrando que esse dados precisam ser uma string, por isso usamos o JSON.stringfy e JSON.parse
    localStorage.setItem('livros', conteudoASerSalvo);
    console.log('consoleAdd ', conteudoASerSalvo);
    // localStorage.livros = conteudoASerSalvo;
});

pegaDoStorage.addEventListener('click', function () {
    // getItem é uma função/metodo do localstorage que recebe 1 parametro que é a chave com a qual os dados foram salvos no storage
    const storage = localStorage.getItem('livros');
    console.log('pegastorage ', storage);

    // const h1 = document.getElementsByTagName('h1');
    // h1[0].innerText = storage;
    h3.innerText = storage;
});

// colocar o valor do input na div sete
const input = document.getElementById('input');
const btnInput = document.getElementById('inputbutton');
// aqui pegamos informações de um elemento e colocamos em outro atravez de um botão
// então temos uma relação onde o click em um elemento(botão) interage com outros dois elementos(input e div)
btnInput.addEventListener('click', (event) => {
    // mostra que o evento do click é o botão
    console.log('evento', event.target);
    // pega as informações colocadas pela pessoa usuaria na pagina
    const valorInput = input.value;
    // console.log(valorInput);

    // pega o elemento que vai ser modificado
    const divSete = document.getElementById('divSete');
    
    // modifica o elemento com o valor colocado pela pessoa usuaria
    divSete.innerText = valorInput;
    input.value = '';
});

// colocando evento na div 8
// aqui alteramos o conteudo de um elemento onde esse elemento sobre o evento e captura o novo conteudo de um outro elemento que não participa do evento e é selecionado por seletores
const divOito = document.getElementById('divOito');
divOito.addEventListener('dblclick', (event) => {
    // mostra que o evento(dblclick) acontedeu na divOito
    console.log(event.target.innerText);

    // seleciona elemento de onde vamos pegar as informações
    const divUm = document.getElementById('divUm');

    // acessamos a lista de classes do elemento que foi capturado
    console.log('lista de classes', divUm.classList);

    // altera o conteudo do elemento que sofreu a ação pelo conteudo do elemento que foi selecionado
    event.target.innerText = divUm.innerText;
});

// colocando evento na div 9
// aqui alteramos o conteudo de um elemento atravez de um evento em outro elemento, mostrando a versatilidade das nossas interações no DOM
const divNove = document.getElementById('divNove');
divNove.addEventListener('dblclick', () => {
    // console.log(e.target.innerText);
    const hTres = document.getElementById('h3');
    hTres.innerText = 'Mentira pode dar palpite sim!';
});

// aqui esperamos a pagina carregar e caso tenhamos alguma informação salva no localStorage aplicamos a alteração na nossa pag
window.onload = () => {
    if (localStorage.livros) {
        const storage = localStorage.getItem('livros');
    // verificando o tipo do retorno do localStorage
    console.log('consolePega ', typeof storage);
    h3.innerText = storage;
    }
};