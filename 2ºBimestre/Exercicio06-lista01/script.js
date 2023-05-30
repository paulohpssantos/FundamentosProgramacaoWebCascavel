let inputVlr01 = document.querySelector("#inputVlr01");
let inputVlr02 = document.querySelector("#inputVlr02");
let inputVlr03 = document.querySelector("#inputVlr03");
let inputVlr04 = document.querySelector("#inputVlr04");
let btVerificar = document.querySelector("#btVerificar");
let h3Resultado = document.querySelector("#h3Resultado");

function verificarMenor(){
    let valor01 = Number(inputVlr01.value);
    let valor02 = Number(inputVlr02.value);
    let valor03 = Number(inputVlr03.value);
    let valor04 = Number(inputVlr04.value);
    let menor;

    if(valor01 < valor02 && valor01 < valor03 
        && valor01 < valor04){
            menor = valor01; 
    }else if(valor02 < valor01 && valor02 < valor03 
        && valor02 < valor04){
            menor = valor02;
    }else if(valor03 < valor01 && valor03 < valor02 
        && valor03 < valor04){
            menor = valor03;
    }else if(valor04 < valor01 && valor04 < valor02 
        && valor04 < valor03){
            menor = valor04;
    }else{
        menor = null;
    }

    if(menor !== null){
        h3Resultado.innerHTML = 
        "O menor valor encontrado &eacute;: "+menor;
    }else{
        h3Resultado.innerHTML = 
        "os n&uacute;meros s&atilde;o iguais!";
    }
}

btVerificar.onclick = function(){
    verificarMenor();
}