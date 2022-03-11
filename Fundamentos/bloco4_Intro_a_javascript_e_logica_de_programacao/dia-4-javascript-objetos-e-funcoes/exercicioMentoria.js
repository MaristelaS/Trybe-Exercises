// //Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer.
// Essa função deve receber dois parâmetros:
// base e altura e retornar um objeto no formato:
// {
//   area : 0,
//   perimetro: 0;
// }
// Fórmulas:
// area = base * altura
// perimetro = (2 * base) + (2 * altura)

// function calcularPerimetroArea(base, altura){
//   let resultArea = base * altura;
//   let resultPerimetro = (2 * base) + (2 * altura);

//   let resultado = {
//     area: resultArea,
//     perimetro: resultPerimetro,
//   }

//   return resultado;

// }

// console.log(calcularPerimetroArea(2, 2));
// 2. Crie uma função que, dado um array de números inteiros,
// retorne a quantidade de números pares e ímpares no formato de objeto:
// {
//   pares: 0;
//   impares: 0;
// }

// function paresImpares(arr){
//   let contadorPar = 0;
//   let contadorImpar = 0;

//   for(let index = 0; index < arr.length; index += 1){

//     if(arr[index] % 2 === 0){
//       contadorPar += 1;
//     }else {
//       contadorImpar += 1;
//     }
//   }

//   let resultado = {
//     pares: contadorPar,
//     impares: contadorImpar,
//   }

//   return resultado;
// }

// console.log(paresImpares([5, 4, 9, 0]));
// 3. Crie uma função que receba uma string e uma letra.
// Essa função deve verificar se a letra passada existe na string que tambem foi passada pra função
// e se existir quantas vezes ela apareceu.
// retorne um objeto com o resultado
// {
// existe: false,
// quantidade: 0
// }