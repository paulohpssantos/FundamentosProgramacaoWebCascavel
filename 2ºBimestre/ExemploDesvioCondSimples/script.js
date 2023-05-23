let inputMedia = document.querySelector("#inputMedia");
let btVerificar = document.querySelector("#btVerificar");

function verificarMedia(){
    let media = Number(inputMedia.value);

    //Desvio Condicional Simples
    // if(media > 60){
    //     alert("Aluno APROVADO!!!!!!");
    // }else{
    //     alert("Aluno REPROVADO!!!!!!");
    // }

    //Desvio Condicional Composto
    if(media > 60){
        alert("Aluno APROVADO!!!!");
    }else if(media > 30){
        alert("PROVA SUB!!!!");
    }else{
        alert("Aluno REPROVADO!!!!");
    }
}

btVerificar.onclick = function(){
    verificarMedia();
}