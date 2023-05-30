let inputVlr = document.querySelector("#inputVlr");
let btVerificar = document.querySelector("#btVerificar");
let h3Resultado = document.querySelector("#h3Resultado");

function verificarImpar(){
    let valor = Number(inputVlr.value);

    if(valor % 2 !== 0){
        h3Resultado.innerHTML = 
        "O n&uacute;mero &eacute; &iacute;mpar!!";
    }else{
        h3Resultado.innerHTML = 
        "O n&uacute;mero &eacute; par!!";
    }

}

btVerificar.onclick = function(){
    verificarImpar();
}