let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1)Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);
// }

// 2)Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// let soma = 0;
// for (let i = 0; i <numbers.length; i += 1) {
//     soma += numbers[i]; 
// }
// console.log(soma);

// 3) Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array; A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
// 4)Caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// let soma = 0;
// let mediaAritmetica = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index];
//     mediaAritmetica = (soma / numbers.length);
// }
// console.log(mediaAritmetica);
// if (mediaAritmetica > 20) {
//     console.log("Valor maior que 20");
// } else {
//     console.log("Valor menor ou igual a 20");
// }

//5)Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numeroMaior = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numeroMaior < numbers[index]) {
        numeroMaior = numbers[index];
    }
} console.log('O maior numero do vetor é: ', numeroMaior);



