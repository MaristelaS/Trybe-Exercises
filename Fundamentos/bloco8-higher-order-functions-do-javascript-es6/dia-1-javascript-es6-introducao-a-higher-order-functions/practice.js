// Ao chamar a função doingThings:
//doingThings(wakeUp);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

const wakeUp = () => 'Acordando!!';
const coffee = () => 'Bora tomar café!!';
const goodNight = () => 'Partiu dormir!!';

const doingThings = (func) => func();

console.log(doingThings(coffee));
