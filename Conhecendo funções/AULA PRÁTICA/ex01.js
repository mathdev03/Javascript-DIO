
// Escrever meu nome
function escreverMeuNome(name){
    console.log('Meu nome é ' + name);

    return 'Meu nome é ' + name;
}
// Maior que 18 anos
function maiorIdade(idade, name){
    if(idade > 17){
        console.log(escreverMeuNome(name) + ' sou Maior de idade! ' + idade);
    } else {
        console.log(escreverMeuNome(name) + ' sou Menor de idade! ' + idade);
    }
}

(
    function(){
        escreverMeuNome('Matheus');
        escreverMeuNome('Renan');

        maiorIdade(16, 'Matheus');
    }
)(); // Função main!