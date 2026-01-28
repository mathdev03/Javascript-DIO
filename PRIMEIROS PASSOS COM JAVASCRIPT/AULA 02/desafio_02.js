// Gasto de viagem 2.0

// Tipos de combustível
const precoEtanol = 5.79;
const precoGasolina = 6.66;

const tipoCombustivel = 'gasolina';

// Calculo de consumo.
const litroPorKm = 10;
const distancia = 100;

const consumo = distancia / litroPorKm;

// Criar variavel para receber o custo total
let custoValor = 0;
const isGasolina = tipoCombustivel === 'gasolina'

if(isGasolina){
    custoValor = consumo * precoGasolina;
} else {
    custoValor = consumo * precoEtanol;
}

// if(tipoCombustivel === "gasolina"){
//     custoValor = consumo * precoGasolina;
// } else if(tipoCombustivel === "etanol"){
//     custoValor = consumo * precoEtanol;
// }

console.log('Custo total da viagem com '+ tipoCombustivel +' foi: R$' + custoValor.toFixed(2));