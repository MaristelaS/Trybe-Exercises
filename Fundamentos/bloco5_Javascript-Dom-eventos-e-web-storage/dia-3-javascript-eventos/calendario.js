function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
createDaysOfTheWeek();
// Escreva seu código abaixo.

// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysofTheMonth(array) {
  let ulDays = document.getElementById('days');

  for (let index = 0; index < array.length; index += 1) {
    let daysList = document.createElement('li');
    daysList.innerText = array[index];
    ulDays.appendChild(daysList);
    daysList.classList.add('day');

    if (array[index] === 24 || array[index] === 25 || array[index] === 31) {
      daysList.classList.add('holiday');
    }
    if (array[index] === 4 || array[index] === 11 || array[index] === 18 || array[index] === 25) {
      daysList.classList.add('friday');
    }
  }

}
createDaysofTheMonth(dezDaysList);

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function criaBotaoFeriados(string) {
  let btn = document.createElement("button");
  let btnContainer = document.querySelector(".buttons-container");
  btn.innerText = string;
  btn.id = "btn-holiday";
  btnContainer.appendChild(btn);
}
criaBotaoFeriados("Feriados");

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".
function botaoFeriados() {

  let btnFeriado = document.getElementById('btn-holiday');
  let getClassHoliday = document.querySelectorAll('.holiday');
  let colorHoliday = 'rgb(238,238,238)';
  let newColorHoliday = 'white';

  btnFeriado.addEventListener('click', function () {
    for (let index = 0; index < getClassHoliday.length; index += 1) {
      if (getClassHoliday[index].style.backgroundColor === newColorHoliday) {
        getClassHoliday[index].style.backgroundColor = colorHoliday;
      } else {
        getClassHoliday[index].style.backgroundColor = newColorHoliday;
      }
    }
  })
}
botaoFeriados();

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function criaBotaoSextaFeira(string) {
  let btnSextaFeira = document.createElement('button');
  let getBtnContainer = document.querySelector('.buttons-container');

  btnSextaFeira.innerText = string;
  btnSextaFeira.id = "btn-friday";
  getBtnContainer.appendChild(btnSextaFeira);

}
criaBotaoSextaFeira("Sexta-Feira");

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

let diasSextaFeira = [4, 11, 18, 25];
function botaoSextaFeira(arraySextaFeira) {

  let btnSextaFeira = document.getElementById('btn-friday');
  let getClassFriday = document.querySelectorAll('.friday');
  let textoNovo = "Sextou!";

  btnSextaFeira.addEventListener('click', function () {
    for (let index = 0; index < getClassFriday.length; index += 1) {
      if (getClassFriday[index].innerText === textoNovo) {
        getClassFriday[index].innerText = arraySextaFeira[index];
      } else {
        getClassFriday[index].innerText = textoNovo;
      }
    }
  })
}
botaoSextaFeira(diasSextaFeira);

// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .

function zoomIn() {
  let dias = document.getElementById('days');

  dias.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = 'x-large'
  })
};

function zoomOut() {
  let dias = document.getElementById('days');

  dias.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px'
  })
};
zoomIn();
zoomOut();

// Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function criaTarefa(nomeDaTarefa) {
  let tarefa = document.createElement('span');
  let getClassMyTasks = document.querySelector('.my-tasks');

  tarefa.innerHTML = nomeDaTarefa;
  getClassMyTasks.appendChild(tarefa);

}
criaTarefa("Projetos");

// Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function criaLegendaCor(cor) {
  let legenda = document.createElement('div');
  let getClassMyTasks = document.querySelector('.my-tasks');

  legenda.style.backgroundColor = cor;
  legenda.classList.add = 'task';

  getClassMyTasks.appendChild(legenda);
}
criaLegendaCor('green');

// Exercício 9:
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function adicionaEvento() {
  let getDayTagDiv = document.get


  Element.addEventListener('click', function () {

  })
}