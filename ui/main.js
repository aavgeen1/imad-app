console.log('Loaded!');

var element = document.getElementById("main-text");
element.innerHTML='PUT HERE IN PLACE OF THE FORMER by main.js';

var img= document.getElementById("madi");

var marginLeft=0;
var marginRight=0;
var isLeft=false;
function moveRight(){
    marginLeft+=1;
    img.style.marginLeft= marginLeft+"px";
}
function moveLeft(){
    marginRight+=1;
    img.style.marginRight= marginRight+"px";
}

img.onclick = function() {
    if(isLeft){
        var interval = setInterval(moveRight,10);
        console.log(interval);
        isLeft=false;
    }
    if(!isLeft){
        var interval2 = setInterval(moveLeft,10);
        console.log(interval2);
        isLeft=true;
    }
};