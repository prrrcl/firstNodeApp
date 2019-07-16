'use strict'

// explicita

// const getNames = (studentList) => {
//   const names = studentList.map((student) => {
//     return student.name;
//   })
//   return names;
// }

//Concisa

const getNames = studentList => studentList.map(student => student.name);


module.exports = getNames; // Exportamos la función