// Modelo diferente da resolução do exercício 3!

const precoEtiqueta = 100;
const formaDePagamento = 4; // Algoritmo de separação dos pagamentos por número

if(formaDePagamento === 1){
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if(formaDePagamento === 2){
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if(formaDePagamento === 3){
    console.log(precoEtiqueta);
} else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}


// Entender abstrações de códigos extensos, para uma limpa de código mais simples aonde dados
// possam passar mais rápidos!