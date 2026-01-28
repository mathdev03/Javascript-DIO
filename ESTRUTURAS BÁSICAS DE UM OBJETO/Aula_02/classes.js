// Classe, é definição do que deveria ser
// Instância é uma ocorrência de uma classe

class Pessoa{
    nome;
    idade;
    dataNascimento;

    // Contrutor para inicialização do objeto completo!
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.dataNascimento = 2025 - idade;
    }
    
    descrever(){
        console.log(`Olá meu nome é ${this.nome} e minha idade é ${this.idade}`);
        console.log(`\nMinha data de nascimento é ${this.dataNascimento}`);
    }
}

// Criando um objeto instânciando os valores de uma classe.
const matheus = new Pessoa('Matheus', 22);
const renan = new Pessoa('Renan', 30);

