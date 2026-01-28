/* 
1) Faça um programa que receba a média de um aluno.
    Caso a média seja < 5 imprima "Reprovado"
    Caso a média seja >= 5 e < 7 imprima "Recuperação"
    Caso a média seja >= 7 imprima "Aprovado"

    Exemplo:
        Entrada:
            5.5
        Saída:
            Recuperação

*/

const {gets, print} = require('./funcao_auxiliar');

function calcularMedia(nota){
    if(nota < 0 || nota > 10){
        return 'Número Inválido!'
    }

    if(nota < 5){
        return 'Reprovado!';
    } else if(nota >= 5 && nota < 7){
        return 'Recuperação!';
    } else if(nota >= 7){
        return 'Aprovado!';
    }
}

print(calcularMedia(gets()));