let inputNum1 = document.querySelector("#inputNum1");
let inputNum2 = document.querySelector("#inputNum2");
let btSomar = document.querySelector("#btSomar");
let h3Resultado = document.querySelector("#h3Resultado");

function somarNumeros(){
    let num1 = Number(inputNum1.value);
    let num2 = Number(inputNum2.value);
    
    h3Resultado.innerHTML = 
        "Resultado da soma: "+(num1 + num2) + "<hr>";
}

btSomar.onclick = function(){
    somarNumeros();
}