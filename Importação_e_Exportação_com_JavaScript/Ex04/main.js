/*

3) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
Exemplo:
    Entrada:
        5
        1
        3
        9
        10
        12

    Saída:
        Números Pares: 10, 12
*/

const {gets, print} = require('./auxiliar');

let numeroPares = 'Numero Pares: ';

const quantidadeNumero = gets();
let inst = 0;

for (let i = 0; i < quantidadeNumero; i++) {
    const valores = gets();
    
    if((valores % 2) == 0){
        numeroPares += (inst === 0 ? valores : ", " + valores);
        inst++;
    }
}

console.log(numeroPares);