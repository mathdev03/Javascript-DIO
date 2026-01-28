console.log("-- CALCULO IMC --");
console.log();

const altura = 1.80;
const peso = 95;

// Biblioteca de matemática.

const imc = peso / Math.pow(altura, 2);

// Condições

let condicao = "";

if(imc < 18.5){
    condicao = "Abaixo do peso!";
} else if(imc >= 18.5 && imc < 25){
    condicao = "Peso ideal!";
} else if(imc >= 25 && imc < 30){
    condicao = "Acima do peso!";
} else if(imc >= 30 && imc <= 40){
    condicao = "Obeso! IMC: ";
} else{
    condicao = "Obesidade Grave!";
}

console.log(condicao + " IMC: " + imc.toFixed(2));