// Funções auxiliares de gets e print, para simular caso erro de código!


// Mocado (Simulando uma leitura)!
function gets(){
    return 10;
}

function print(texto){
    console.log(texto);
}

function legal(NOFAP){
    return NOFAP;
}

// Exportando como um objeto para uso na importação

module.exports = {
    gets, 
    print,
    legal
};