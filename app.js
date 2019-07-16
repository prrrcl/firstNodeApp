'use strict';
const chalk = require('chalk');
const getNames = require('./myModule');

const students = [
  {
    name: 'Adri',
    age: 24
  },
  {
    name: 'Ignacy',
    age:33
  }
] 
console.log(chalk.bold.bgBlue.red(getNames(students)))
