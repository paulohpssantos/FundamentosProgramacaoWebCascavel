let inputVlrPeso = document.querySelector("#inputVlrPeso");
let inputQtdProd = document.querySelector("#inputQtdProd");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularTotal(){
    let valorPeso = Number(inputVlrPeso.value);
    let qtdProd = Number(inputQtdProd.value);

    h3Resultado.textContent = 
        "Valor total do produto: "+valorPeso * qtdProd;
}

btCalcular.onclick = function(){
    calcularTotal();
}