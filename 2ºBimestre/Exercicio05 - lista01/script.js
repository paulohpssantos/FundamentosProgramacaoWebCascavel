let inputVlr01 = document.querySelector("#inputVlr01");
let inputVlr02 = document.querySelector("#inputVlr02");
let btVerificar = document.querySelector("#btVerificar");
let h3Resultado = document.querySelector("#h3Resultado");

function verificarMaior(){
    let valor01 = Number(inputVlr01.value);
    let valor02 = Number(inputVlr02.value);

    if(valor01 > valor02){
        h3Resultado.innerHTML = 
            "o Valor "+valor01+" &eacute; maior!";
    }else if(valor02 > valor01){
        h3Resultado.innerHTML = 
            "o Valor "+valor02+" &eacute; maior!";
    }else{
        h3Resultado.innerHTML = 
            "os n&uacute;meros s&atilde;o iguais!";
    }
}

btVerificar.onclick = function(){
    verificarMaior();
}
