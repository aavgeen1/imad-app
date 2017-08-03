console.log('Loaded!');

var element = document.getElementById("main-text");
element.innerHTML='PUT HERE IN PLACE OF THE FORMER by main.js';

var img= document.getElementById("madi");

var marginLeft=0;
var marginRight=0;
var isLeft=false;
var interval,interval2;
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
        if(interval2)
            clearInterval(interval2);
        interval = setInterval(moveRight,10);
        console.log("Going Right",interval);
        isLeft=false;
    }
    else{
        if(interval)
            clearInterval(interval);
        interval2 = setInterval(moveLeft,10);
        console.log("Going Left",interval2);
        isLeft=true;
    }
};


var btn=document.getElementById("clickbtn");

btn.onclick = function(){
    var request= new XMLHttpRequest();
    //Create  a request object.
    request.onreadystatechange=function(){
        if(request.readyState == XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter = request.responseText;
                var span= document.getElementById("numofclicks");
                span.innerHTML = counter.toString();
            }
        }
    }
    //http://aavgeensingh1.imad.hasura-app.io
    //Make a request
    request.open('GET', "http://localhost:80/ui/counter", true);
    request.send(null);
}


var submit=document.getElementById("submitbtn");

submit.onclick = function(){
    //Make a request to the server
    var namerequest= new XMLHttpRequest();
    //Create  a request object.
    namerequest.onreadystatechange=function(){
        if(namerequest.readyState == XMLHttpRequest.DONE){
            if(namerequest.status === 200){
               var names = namerequest.responseText;
                names= JSON.parse(names);
                var list ='';
                for(var i in names){
                    list+='<li>' +names[i]+ '</li>'
                }
                var ol= document.getElementById("namelist");
                ol.innerHTML = list;
            }
        }
    }
    //http://aavgeensingh1.imad.hasura-app.io
    //Make a request
    var nameInput= document.getElementById("name");
var name=nameInput.value;
    namerequest.open('GET', "http://localhost:80/ui/submit-name?name="+name,true);
    namerequest.send(null);
    
}












