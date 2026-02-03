/* 
    2) Faça um programa que receba N quantidade de números e seus respectivos valores.
    Imprima o maior número par e o menor número impar.

    Exemplo:
        Entrada:
            5
            3
            4
            1
            10
            8

        Saída:
            Maior número par: 10
            Menor número impar: 1
*/

const {gets, print} = require('./auxiliar');

let maiorPar = null;
let menorImpar = null;

// Função calcular par/ímpar e conferir se o maior número par e o menor número ímpar!
function parOuImpar(num){
    if((num % 2) === 0){
        const condicao = num > maiorPar || maiorPar === null;

        if(condicao){
            maiorPar = num;
        }
    } else{
        const condicao = num < menorImpar || menorImpar === null;

        if(condicao){
            menorImpar = num;
        }
    }
}

const tamanhoNumeros = gets();

for(let i = 0; i < tamanhoNumeros; i++){
    parOuImpar(gets());
}

print("-------------------------------------------");

print(`Maior número par: ${maiorPar}`);
print(`Menor número impar: ${menorImpar}`);