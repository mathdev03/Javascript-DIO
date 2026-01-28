// Para criar uma lista de arrays é preciso de colchetes [] para uma váriavel

const alunos = ['Matheus', 'João', 'Marina'];

// Pode mostrar o valor da lista atribuindo sua posição.
console.log(alunos[0]);

// Adicionar dinamicamente e diretamente um valor na lista

alunos.push('Renan');// Dinânimco

alunos[4] = 'Vinícius';// Diretamente


// Tipos diferente de valores em uma mesma lista.

const listaDiferentao = [];

listaDiferentao.push('Valor');
listaDiferentao.push('Valores');
listaDiferentao.push(150);

// Tira o último valor da lista.
console.log(listaDiferentao.pop());

// Tira o primeiro valor da lista.
console.log(listaDiferentao.shift());

// Listar quantos valores possui em uma lista.
console.log(listaDiferentao.length);

console.log(listaDiferentao);