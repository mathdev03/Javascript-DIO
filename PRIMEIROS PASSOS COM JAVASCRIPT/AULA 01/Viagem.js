const precoCombustivel = 5.79;
const gastoMedio = 10;
const distancia = 100;

const custoValor = (distancia / gastoMedio) * precoCombustivel;

console.log("Custo total da viagem foi: R$" + custoValor.toFixed(2));