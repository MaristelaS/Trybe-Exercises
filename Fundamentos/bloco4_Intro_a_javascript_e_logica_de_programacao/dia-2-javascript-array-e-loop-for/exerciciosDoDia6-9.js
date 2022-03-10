let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//6) Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// let valorImpar = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 === 1) {
//         valorImpar += 1;
//     }
// }
// if (valorImpar === 0) {
//     console.log("nenhum valor ímpar encontrado");
// } else {
//     console.log("Foram encontrados: ", valorImpar, " valores ímpares");
// }

//7) Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let menorValor = 1;
for (let index = 0; index < numbers.length; index += 1) {
    if (menorValor > numbers[index]) {
        menorValor = numbers[index];
    }
} console.log ("O menor valor contido no array é: ", menorValor);

//8) Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
//9) Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
//Bonus


