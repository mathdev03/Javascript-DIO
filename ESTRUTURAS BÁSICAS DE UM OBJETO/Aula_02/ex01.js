/*
    Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor, e um gasto médio de combustivel por kilômetro rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor
    gasto em reais realizar este percurso.
*/

class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = (1 / gastoMedioPorKm);
    }

    gastoPercurso(quantidadeKm, precoCombustivel){

        const consumo = quantidadeKm * this.gastoMedioPorKm;

        return `O gasto da viagem foi: R$${consumo * precoCombustivel}`;
    }
}


const gol = new Carro('Toyota', 'Cinza', 12);
const camaro = new Carro('Chevrolet', 'Amarelo', 38);

const quantKm = 70;
const precoCombustivel = 5;

console.log(gol);

console.log(gol.gastoPercurso(quantKm, precoCombustivel));
console.log(camaro.gastoPercurso(quantKm, precoCombustivel));