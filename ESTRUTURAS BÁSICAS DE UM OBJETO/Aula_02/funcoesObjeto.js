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

//Função de comparar pessoas

function compararPessoa(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade!`);
    }
}

const matheus = new Pessoa('Matheus', 38);
const renan = new Pessoa('Renan', 38);

compararPessoa(matheus, renan);

// Funções Recebendo Objetos - Tempo 04:41!