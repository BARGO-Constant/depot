const btn=document.querySelectorAll(".btn");


var clicke;
var audio=null;
var order=[];
var elementOrder=['btn5','btn1','btn7','btn9','btn1','btn5'];
//console.log(elementOrder.length)
var alerte;

alert("ECOUTEZ LA MUSIQUE ,PUIS LA JOUER ");



for(var i=0;i<btn.length;i++){
   // console.log("1");

   btn[i].addEventListener("click",(e)=>{
    //console.log(e.target);
    clicke=e.target;
    var son="";

    if(clicke.id==='btn1'){
        son="btn1coupe.mp3";
    }
    else if(clicke.id==='btn2'){
        son="btn2coupe.mp3";
    }
    else if(clicke.id==='btn3'){
        son="btn3coupe.mp3";
    }
    else if(clicke.id==='btn4'){
        son="btn4coupe.mp3";
    }
    else if(clicke.id==='btn5'){
        son="btn5coupe.mp3";
    }
   
    else if(clicke.id==='btn6'){
        son="btn6coupe.mp3";
    }
    else if(clicke.id==='btn7'){
        son="btn7coupe.mp3";
    }
    else if(clicke.id==='btn8'){
        son="btn8coupe.mp3";
    }
    else if(clicke.id==='btn9'){
        son="btn9coupe.mp3";
    }
       if(audio!==null&&!audio.paused&& audio.src.includes(son) ){
       audio.pause();
      return;
       }
       else{
        audio=new Audio();
        audio.src=son;
        audio.play();
       }
      order.push(clicke.id);

      //console.log(order,order.length)

      if(order.length===6){
        audio.pause();
        alert("merci d'avoir joué,veuillez recharger la page pour jouer de nouveau");
        
        for(var h=0;h<order.length;h++){
        if(order[h]===elementOrder[h]){
            alerte="BRAVO ,VOUS ETES UN TALENTUEUX DE LA MUSIQUE";
            
        }
        else{
           alerte="PAS MAL,AMELIOREZ VOUS D'AVANTAGE";
        } 
    
    }
    alert(alerte)
}
   })
   
} 

