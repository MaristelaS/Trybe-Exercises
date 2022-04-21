// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

const factorial = number => {
    let result = 1;
    for (let index = 2; index <= number; index += 1) {
        result *= index;
    }
    return result;
}

console.log(factorial(5));

// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));

// Crie uma função que receba uma frase e retorne qual a maior palavra.
// longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

const longestWord = text => {
  let palavrasArray = text.split(' ');
  let contadorMaximo = 0;
  let resultado = '';
  
  for(const word of palavrasArray) {
      if(word.length > contadorMaximo) {
          contadorMaximo = word.length;
          resultado = word;
      }
  }
  return resultado;
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));


// Longestword com sort em uma linha.
const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));