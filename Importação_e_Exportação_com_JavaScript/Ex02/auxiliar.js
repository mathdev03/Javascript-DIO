const entrada = 2;
let i = 1;

function gets(){
    const valor = entrada * i;
    i++;
    return valor;
}

function print(text){
    console.log(text);
}

module.exports = {gets, print}