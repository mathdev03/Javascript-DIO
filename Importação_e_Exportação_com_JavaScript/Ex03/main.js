/*

    2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
    Imprima o maior e o menor número deste conjunto.

    Exemplo:
        Entrada:
            4
            100
            150
            90
            200

        Saída:
            Maior número: 200
            Menor número: 90
*/

const {gets, print} = require('./auxiliar');

let maiorNumero = 0;
let menorNumero = 0;

const quantidadeNumero = gets();

for (let i = 0; i < quantidadeNumero; i++) {
    const escolhido = gets();

    if(escolhido > maiorNumero){
        maiorNumero = escolhido;
    } 

    if(escolhido < menorNumero || menorNumero === 0){
        menorNumero = escolhido;
    }
    
}

print(`Maior número: ${maiorNumero}`);
print(`Menor número: ${menorNumero}`);