function musicaBotao(){
    var som = new Audio('./audio/fatality.mp3');
    som.addEventListener("canplaythrough", function(){
    som.play();
    })
}

//