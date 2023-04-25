let titulo = 
    document.querySelector('#titulo');

let campoTexto = 
    document.querySelector('#campoTexto'); 
    
let btSubstituirTexto =
    document.querySelector('#btSubstituirTexto');    

function alteraTitulo(){
    let texto = String(campoTexto.value);
    titulo.textContent = texto;
}    

btSubstituirTexto.onclick = function(){
    alteraTitulo();
}
