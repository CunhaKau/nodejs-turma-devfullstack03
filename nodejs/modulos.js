//importando dados de pessoas
/* const executePessoas = require('./pessoas');

console.log(executePessoas.pessoas, executePessoas.idade); */

//desestruturação
const {pessoas, idade} = require ('./pessoas');
console.log(pessoas, idade);
