let inputVlrPago = document.querySelector("#inputVlrPago");
let inputVlrProd = document.querySelector("#inputVlrProd");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularTroco(){
    let vlrPago = Number(inputVlrPago.value);
    let vlrProd = Number(inputVlrProd.value);

    h3Resultado.innerHTML = 
            "Valor do troco: "+(vlrPago - vlrProd) +"<hr>";
}

btCalcular.onclick = function(){
    calcularTroco();
}