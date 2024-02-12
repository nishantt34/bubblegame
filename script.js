
function makebubble(){
    var clutter="";
    for(var i=1;i<=270;i++){
        var rn=Math.floor(Math.random()*10);
        clutter+=` <div class="bubble">${rn}</div>`
      
    }
    document.querySelector("#panelbottom").innerHTML=clutter;
}

var timer=60;

function runtimer(){
   var timerint= setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#panelbottom").innerHTML=`<h1>Game over<h1>`
        }
  
    },1000);
}

 var rn=0;
function getnewhit(){
    rn=Math.floor(Math.random()*10);
    document.querySelector("#newhit").textContent=rn;
}
score=0;
function increasescore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}

document.querySelector("#panelbottom")
.addEventListener("click",function(detail){
    var clicknum=Number(detail.target.textContent);
    if(clicknum===rn){
        increasescore();
        makebubble();
        getnewhit();
    }
})


makebubble();
runtimer();
getnewhit();
increasescore();
