const alunos = [10, 5, 50, 10, 98, 23, 56, 33, 99, 28, 7];
let i = 0;

function gets(){
    const valor = alunos[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = {gets, print};