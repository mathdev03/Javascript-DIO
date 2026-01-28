function teste(){
    console.log('Testando!');
}

teste();

// Função de procedimento, aonde retorna nada! Apenas a execução da função!
function sayMyName(name){
    console.log('Your name is ' + name);
}   

sayMyName('Matheus');

// Retorno de função
function quadrado(valor){
    return valor * valor;
}

console.log(quadrado(2));

// Exemplo prático dos juros

function incrementarJuros(valor, percentualJuros){
    const acrecimoValor = (percentualJuros / 100) * valor;

    return valor + acrecimoValor;
}

console.log(incrementarJuros(100,10));
console.log(incrementarJuros(100,15));
console.log(incrementarJuros(100,20));