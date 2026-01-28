// Criando objeto em js
// Objeto - coleção dinamica de chave e valor.

// Objeto literal
const matheus = {
    nome: 'Matheus',
    idade: 22,

    // Método dentro de um objeto
    descrever: function(){
        // Usar this para assumir o contexto aonde está a chave
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`); 
    }
};

// Incrementar dados no objeto
matheus.altura = 1.80;

// Incrementar dados na chave do objeto
matheus.idade = 23;

// Chamada de dados do objeto
const name = matheus.nome;

console.log(matheus.nome);
console.log(matheus.idade);
console.log(matheus);

// Deletar chave no objeto
delete matheus.altura;

console.log(matheus);

console.log();

// Chamada de método por objeto

matheus.descrever();

const atributoEscolhido = 'nome';

// Acessar dinamicamente o dado do objeto por String - 17/12/2025, Tempo parado: 02:27
console.log(matheus[atributoEscolhido]);