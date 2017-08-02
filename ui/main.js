console.log('Loaded!');

var element = document.getElementById("main-text");
element.innerHTML='PUT HERE IN PLACE OF THE FORMER by main.js';

var img= document.getElementById("madi");

var marginLeft=0;

function moveRight(){
    marginLeft+=5;
    img.style.marginLeft= marginLeft+"px";
}

img.onclick = function() {
    var interval = setInterval(moveRight,50);
    console.log(marginLeft);
};