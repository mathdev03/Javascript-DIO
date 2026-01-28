
function precoPagamento(etiqueta, pagamento){
    const precoEtiqueta = etiqueta;
    const formaDePagamento = pagamento; // Algoritmo de separação dos pagamentos por número

    if(formaDePagamento === 1){
        console.log(aplicarDesconto(precoEtiqueta, 10));
    } else if(formaDePagamento === 2){
        console.log(aplicarDesconto(precoEtiqueta, 15));
    } else if(formaDePagamento === 3){
        console.log(precoEtiqueta);
    } else {
        console.log(aplicarJuros(precoEtiqueta, 10));
    }
}

function aplicarDesconto(precoEtiqueta, porcentagem){
    porcentagem = porcentagem / 100;
    return precoEtiqueta - (precoEtiqueta * porcentagem);
}

function aplicarJuros(precoEtiqueta, porcentagem){
    porcentagem = porcentagem / 100;
    return precoEtiqueta + (precoEtiqueta * porcentagem);
}

// main
(
    function(){
        precoPagamento(100, 4);
    }
)()