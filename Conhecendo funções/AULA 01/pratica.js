function calcularimc(peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc){
    if(imc < 18.5){
        return 'Abaixo do peso!';
    } else if(imc >= 18.5 && imc < 25){
        return 'Peso ideal!';
    } else if(imc >= 25 && imc < 30){
        return 'Acima do peso!';
    } else if(imc >= 30 && imc <= 40){
        return 'Obeso! IMC: ';
    } else{
        return 'Obesidade Grave!';
    }
}
// Função invocada imediatamente - Priorização de uma função.
(function(){
    console.log("-- CALCULO IMC --");
    console.log();

    const altura = 1.80;
    const peso = 95;

    // Biblioteca de matemática.

    const imc = calcularimc(peso, altura);

    // Condições

    console.log(classificarImc(imc) + " IMC: " + imc.toFixed(2));
})();


function teste(){
    console.log(2);
}

// Manipulação de objetos

const main2 = teste; // Subtitiuir objetos

console.log(main2);

// Receber função nova.
teste = function(){
    console.log(1);
}

teste();