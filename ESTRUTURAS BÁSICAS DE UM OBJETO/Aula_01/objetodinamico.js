const pessoa = {
    nome: 'Joana',
    idade: 34
}

pessoa.descrever = function(){
    console.log(`Olá meu nome é ${this.nome} e minha idade é ${this.idade}`);
}

const romano = {
    I: 1,
    V: 5,
    X: 10
}

const conversor = 'I'

console.log(romano[conversor]);
console.log(pessoa.descrever());