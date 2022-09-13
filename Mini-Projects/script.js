const result = document.getElementById('result');

document.getElementById('0').addEventListener('click', insertNumber)
document.getElementById('1').addEventListener('click', insertNumber)
document.getElementById('2').addEventListener('click', insertNumber)
document.getElementById('3').addEventListener('click', insertNumber)
document.getElementById('4').addEventListener('click', insertNumber)
document.getElementById('5').addEventListener('click', insertNumber)
document.getElementById('6').addEventListener('click', insertNumber)
document.getElementById('7').addEventListener('click', insertNumber)
document.getElementById('8').addEventListener('click', insertNumber)
document.getElementById('9').addEventListener('click', insertNumber)
document.getElementById('dot').addEventListener('click', insertNumber)

document.getElementById('ac').addEventListener('click', clearNumber)
document.getElementById('decrease').addEventListener('click', decreaseNum)
document.getElementById('+').addEventListener('click', sum)
document.getElementById('-').addEventListener('click', subtracion)
document.getElementById('/').addEventListener('click', division)
document.getElementById('x').addEventListener('click', multiplication)

function insertNumber (event) {
  const number = result.innerText;
  result.innerText = number + event.target.innerText;
}

function clearNumber (event) {
  result.innerText = '';
}

function decreaseNum (event) {
  let text = result.innerText;
  result.innerText = text.substring(0, text.length -1);
}

function sum () {
  console.log('soma')
}

function subtracion () {
  console.log('subtrai')
}

function multiplication () {
  console.log('soma')
}

function division () {
  console.log('soma')
}
