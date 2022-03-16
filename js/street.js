function musicaBotao(){
    var som = new Audio('./audio/C-S1.mp3');
    som.addEventListener("canplaythrough", function(){
    som.play();
    })
}

function musicaBotaoAzul(){
    var som = new Audio('./audio/C-Kikoken.mp3');
    som.addEventListener("canplaythrough", function(){
    som.play();
    })
}