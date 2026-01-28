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

let numPares = [];
let numImpars = [];

// Função calcular par/ímpar
function parOuImpar(num){
    if((num % 2) === 0){
        numPares.push(num);
    } else{
        numImpars.push(num);
    }
}

// Funções de maior número e menor número
function maiorNumeroPar(numeros){
    let maior = 0;

    numeros.forEach(n => {
        if(maior < n){
            maior = n;
        }
    });

    return maior;
}
function menorNumeroImpar(numeros){
    let menor = 0;

    numeros.forEach(n => {
        if(menor === 0 || menor > n){
            menor = n;
        }
    });

    return menor;
}

const tamanhoNumeros = gets();

for(let i = 0; i < tamanhoNumeros; i++){
    parOuImpar(gets());
}

print(`Maior número par: ${maiorNumeroPar(numPares)}`);
print(`Menor número impar: ${menorNumeroImpar(numImpars)}`);