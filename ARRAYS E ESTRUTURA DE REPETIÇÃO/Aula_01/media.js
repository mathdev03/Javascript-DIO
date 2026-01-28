const notas = [];


notas.push(10);
notas.push(10);
notas.push(10);

let soma = 0;



notas.forEach(element => {
    soma += element;
});

const media = soma / notas.length;

console.log(media);