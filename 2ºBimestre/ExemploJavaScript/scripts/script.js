let h1Titulo = document.querySelector("#h1Titulo");
let inputTexto = document.querySelector("#inputTexto");
let btTrocarTexto = document.querySelector("#btTrocarTexto");

function alterarTexto(){
    //Retorna o valor do input e adiciona em uma variavel
    let texto = String(inputTexto.value); 

    //Adiciona texto ao elemento (somente texto)
    h1Titulo.textContent = texto;
    
    //Adiciona elementos em html
    h1Titulo.innerHTML += texto+"<br>" ;

    //Adiciona CSS ao elemento
    h1Titulo.style.color = "blue";
    h1Titulo.style.fontFamily = "Arial";
}

btTrocarTexto.onclick = function(){
    alterarTexto();
}

