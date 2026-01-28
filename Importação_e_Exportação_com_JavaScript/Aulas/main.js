// Importando as funções em um objeto.
const funcoes = require('./funcoes_auxiliares');

console.log(funcoes.gets());
console.log(funcoes.legal('NOFAP'));


// Object Destructuring - Atribuir um valor a mais de um variável!

const {gets, print} = require('./funcoes_auxiliares');

print("Deu certo!");
print(gets());