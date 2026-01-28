/*
Crie uma classe pessoas, cada pessoa tem nome, peso e altura.
Espeficique o valor do método IMC: IMC = peso / (altura * altura).

Objetivo: Instanciar uma pessoa chamada José que tenha 70kg e 1,75 de altura e pedir para José
dizer o valor do IMC.

*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    valorImc(){
        return this.peso / (Math.pow(this.altura, 2));
    }

    classificarImc(){

        const valor = this.valorImc();

        if(valor < 18.5){
            return 'Abaixo do peso!';
        }else if(valor >= 18.5 && valor < 25){
            return 'Peso ideal!';
        } else if(valor >= 25 && valor < 30){
            return 'Acima do peso!';
        } else if(valor >= 30 && valor <= 40){
            return 'Obeso!';
        } else {
            return 'Obesidade Grave!';
        }
    }
}


const jose = new Pessoa('José', 70, 1.75);
const matheus = new Pessoa('Matheus', 80, 1.80);
const vitor = new Pessoa('Vitor', 60, 1.69);

const escolhido = vitor;

console.log(`O ${escolhido.nome} tem o IMC de ${escolhido.valorImc().toFixed(2)}`);
console.log(escolhido.classificarImc());