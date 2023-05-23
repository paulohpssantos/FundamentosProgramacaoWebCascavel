let inputVlr01 = document.querySelector("#inputVlr01");
let inputVlr02 = document.querySelector("#inputVlr02");
let inputVlr03 = document.querySelector("#inputVlr03");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularMedias(){
    let vlr1 = Number(inputVlr01.value);
    let vlr2 = Number(inputVlr02.value);
    let vlr3 = Number(inputVlr03.value);

    //media aritmetica
    let mediaAritmetica = (vlr1 + vlr2 + vlr3) / 3;

    //media ponderada pesos 3,2 e 5
    let somaVlrPesos = (vlr1 * 3) + (vlr2 * 2) + (vlr3 * 5);
    let somaPesos = 3 + 2 + 5;
    let mediaPonderada = somaVlrPesos / somaPesos;

    let somaMedias = mediaAritmetica + mediaPonderada;

    let mediaMedias = somaMedias / 2;

    h3Resultado.innerHTML = 
        "Media Aritmetica: "+mediaAritmetica+"<br>"+
        "Media Ponderada: "+mediaPonderada+"<br>"+
        "Soma das Medias: "+somaMedias+"<br>"+
        "Media das Medias: "+mediaMedias;
}

btCalcular.onclick = function(){
    calcularMedias();
}
