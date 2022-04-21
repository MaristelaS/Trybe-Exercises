// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maçã', 'pêra'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'aveia', 'mel'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const fruitSaladaWithAdditional = [...fruit, ...additional];
  return fruitSaladaWithAdditional;
};
//console.log(fruitSalad(specialFruit, additionalItens));

//////////////////////////////////////////////////////////////////////
//REST: 
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
//console.log(sum(4, 7, 8, 9, 60)); // 88

///////////////////////////////////////////////////////////////////////
//OBJECT DESTRUCTURING:
const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
  };
  
  const { workDays, weekend } = daysOfWeek;
  console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  console.log(weekend); // ['Saturday', 'Sunday']
  
  const weekdays = [...workDays, ...weekend];
  console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

 //1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise . Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator .
 const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

  const userInfo = {
      ...user,
      ...jobInfos,
  };
  //2 - Com o objeto em mãos, imprima no console uma frase de sua escolha utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals .

  const { name, age, nationality, profession, squad, squadInitials} = userInfo;
  console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);