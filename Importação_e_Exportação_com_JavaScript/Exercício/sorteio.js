// Alunos

function sorteadoAluno(n1, n2, n3, n4, n5){
    const alunos = [n1, n2, n3, n4, n5];
    let maior = 0;

    alunos.forEach(primeiro => {
        alunos.forEach(segundo => {
            if(maiorQueOutro(primeiro, segundo)){
                if(primeiro > maior){
                    maior = primeiro;
                }
            } else {
                return;
            }
        });
    });

    return maior;
}

function maiorQueOutro(n1, n2){
    if(n1 > n2){
        return true;
    }
}


module.exports = {sorteadoAluno}