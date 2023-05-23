let inputVlrSaldo = document.querySelector("#inputVlrSaldo");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularReajuste(){
    let saldo = Number(inputVlrSaldo.value);

    h3Resultado.textContent = 
        "Valor Reajustado:"+ (saldo + (saldo * (1/100)));
}

btCalcular.onclick = function(){
    calcularReajuste();
}