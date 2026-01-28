console.log("-- CALCULO DE PREÇO DO PRODUTO --");
console.log();
console.log();

const precoProduto = 530.35;
const tipoPagamento = 1; // Significa débito

const formaPagamento = 'Parcelado';
const quantasParcelas = 5;

if(formaPagamento === 'Vista'){
    if(tipoPagamento === 1){
        const produtoFinal = precoProduto - ((precoProduto*10) / 100);

        console.log('Preço do produto com desconto de 10% é R$: ' + produtoFinal.toFixed(2));
    } else{
        const produtoFinal = precoProduto - ((precoProduto*15) / 100);

        console.log('Preço do produto com desconto de 15% é R$: ' + produtoFinal.toFixed(2));
    }
} else{
    if(quantasParcelas === 2){
        console.log('Preço do produto é R$: ' + precoProduto);
    } else if(quantasParcelas > 2){
        const produtoFinal = precoProduto + ((precoProduto*10) / 100);

        console.log('Preço do produto parcelado '+ quantasParcelas + 
            'x com juros de 10% é R$: ' + produtoFinal);
    }
}