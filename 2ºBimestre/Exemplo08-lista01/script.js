let inputCodigo = document.querySelector("#inputCodigo");
let btVerificar = document.querySelector("#btVerificar");
let h3Resultado = document.querySelector("#h3Resultado");

function retornarDescricao(){
    let codigo = String(inputCodigo.value);

    if(codigo === "001"){
        h3Resultado.innerHTML = "Parafuso";
    }else if(codigo === "002"){
        h3Resultado.innerHTML = "Porca";
    }else if(codigo === "003"){
        h3Resultado.innerHTML = "Prego";
    }else{
        h3Resultado.innerHTML = "Diversos";
    }
}

btVerificar.onclick = function(){
    retornarDescricao();
}

