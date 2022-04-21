const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// Exercicio1
//   const addNewLessonPeriod = (object, newKey, addValue) => {
//       object[newKey] = addValue;
//      return object;
//   };
//   console.log(addNewLessonPeriod(lesson2, 'turno', 'noite'));

// Exercicio2
//     const listKeys = (obj) => Object.keys(obj);
//     console.log(listKeys(lesson1));

// Exercicio3
    // const objectSize = (obj) => Object.keys(obj).length;
    // console.log(objectSize(lesson2));

// Exercicio4
    // const objectValues = (obj) => Object.values(obj);
    // console.log(objectValues(lesson3));

// Exercicio5
    // const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
    // console.log(allLessons);

// Exercicio6
    // function totalStudents (obj) {
    // const keys = Object.keys(obj);
    // let total = 0;

    // for (let index = 0; index < keys.length; index +=1) {
    //     const chaveAtual = keys[index];
    //     total += obj[chaveAtual].numeroEstudantes;
    // }
    // return total;
    // }
    // console.log(totalStudents(allLessons));

// Exercicio7
    // const keyValue = (obj, position) => Object.values(obj)[position];
    // console.log(keyValue(lesson1, 3));

// Exercicio8
    const verifyPair = (obj, key, value) => {
        let isEqual = false;
        for (let index in Object.entries(obj)) {
            if (Object.entries(obj)[index][0] === key && Object.entries(obj)[index][1] === value) isEqual = true;
        }
        return isEqual;
    };
    console.log(verifyPair(lesson2,'professor','Carlos'));
