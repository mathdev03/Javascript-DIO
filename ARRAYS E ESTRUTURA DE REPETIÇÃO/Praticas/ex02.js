// Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const numeros = [];
const quantidade = 40;


for(let i = 0; i < quantidade; i++){
    numeros.push((i + 1));
}

for(let i = 0; i < numeros.length; i++){
        if((numeros[i] % 2) === 0){
        console.log(`O número ${numeros[i]} é par!`);
    }
}

