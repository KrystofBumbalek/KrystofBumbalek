//Container//
let valueOfNumber = document.getElementById("value");
let buttonIncrease = document.getElementById("btn increase");
let buttonDecrease = document.getElementById("btn decrease");
let buttonReset = document.getElementById("btn reset");
//Container for background color//
let bacgroudColorContainer = document.getElementById("containerForBackground");

let ArrayOfBacgroudColor1 = ["#ccffe6","#b3ffd9","#99ffcc","#80ffbf","#66ffb3","#4dffa6","#33ff99","#1aff8c","#00ff80","#00e673","#00cc66","#00b359","#00994d","#008040"];
let ArrayOfBacgroudColor2 = ["#ffcccc","#ffb3b3","#ff9999","#ff8080","#ff6666","#ff4d4d","#ff3333","#ff1a1a","#ff0000","#e60000","#cc0000","#b30000","#990000","#800000"];
//["#cc0000","#e60000","#ff0000","#ff1a1a", "#ff3333","#ff4d4d","#ff6666","#ff8080", "#ff9999", "#ffb3b3", "#ffcccc", "#b3b3b3", "#ccffeb", "#b3ffe0", "#99ffd6", "#80ffcc", "#66ffc2", "#4dffb8","#33ffad"];

//value of the background coltainer
let valueOfBackground = document.getElementById("valueOfBackground");


let number = 0;




/*let x = -54;
console.log(x);
let y = Math.abs(x);
console.log(y);*/

buttonIncrease.addEventListener("click", function (){
    number += 1;
    valueOfNumber.innerText = number;
    if (number>0){
        valueOfNumber.style.color = "green";
    }
    else if (number===0){
        valueOfNumber.style.color = "black";
    }



    numberForArray = Math.abs(number);
  
if(numberForArray){
    bacgroudColorContainer.style.backgroundColor = ArrayOfBacgroudColor1[numberForArray];
    valueOfBackground.innerText = ArrayOfBacgroudColor1[numberForArray];
    valueOfBackground.style.visibility = "visible";
    // valueOfBackground.style.color = Udelat jiny pole barev (potom udelat stejne barevnej border)
    if(number < 0){
        console.log("zaporny");
        bacgroudColorContainer.style.backgroundColor = ArrayOfBacgroudColor2[numberForArray];
        valueOfBackground.innerText = ArrayOfBacgroudColor2[numberForArray];
        valueOfBackground.style.visibility = "visible";
        //valueOfBackground.style.color = "blue";
    }

}
if(number==0){
    bacgroudColorContainer.style.backgroundColor = "#b3b3b3";
    valueOfBackground.innerText = "#b3b3b3";
}


   
    // Varianta pro bacgkroud pomoci IF//
   /* if(number==1 || number==-1){
    bacgroudColorContainer.style.backgroundColor = ArrayOfBacgroudColor1[1];
    }
    if(number==2 || number==-2){
        bacgroudColorContainer.style.backgroundColor = "green";
        }
        if(number==3 || number==-3){
            bacgroudColorContainer.style.backgroundColor = "yellow";
            }
            if(number==4 || number==-4){
                bacgroudColorContainer.style.backgroundColor = "blue";
                }
                if(number==0){
                    bacgroudColorContainer.style.backgroundColor = "grey"; 
                }*/
       
        //Varianta pro backgroun pomoci for//
       /*for(let i=0; i < ArrayOfBacgroudColor1.length; i++){

           //bacgroudColorContainer.style.backgroundColor = ArrayOfBacgroudColor1[number]; 
          

       }*/
       return number;
})



buttonDecrease.addEventListener("click", function (){
    number -=1;
    valueOfNumber.innerText = number;
    if (number<0){
        valueOfNumber.style.color = "red";
    }
    else if (number===0){
        valueOfNumber.style.color = "black";
    }

    numberForArray = Math.abs(number);
  
    if(numberForArray){
        bacgroudColorContainer.style.backgroundColor = ArrayOfBacgroudColor1[numberForArray];
        valueOfBackground.innerText = ArrayOfBacgroudColor1[numberForArray];
        valueOfBackground.style.visibility = "visible";
        if(number < 0){
            console.log("zaporny");
            bacgroudColorContainer.style.backgroundColor = ArrayOfBacgroudColor2[numberForArray];
            valueOfBackground.innerText = ArrayOfBacgroudColor2[numberForArray];
            valueOfBackground.style.visibility = "visible";
        }
    }
    if(number==0){
        bacgroudColorContainer.style.backgroundColor = "#b3b3b3";
        valueOfBackground.innerText = "#b3b3b3";
    }
    
    /*if(number==-1  || number==1){
        bacgroudColorContainer.style.backgroundColor = ArrayOfBacgroudColor1[1];
        }
        if(number==-2 || number==2){
            bacgroudColorContainer.style.backgroundColor = "green";
            }
            if(number==-3 || number==3){
                bacgroudColorContainer.style.backgroundColor = "yellow";
                }
                if(number==-4 || number==4){
                    bacgroudColorContainer.style.backgroundColor = "blue";
                    }
                    if(number==0){
                        bacgroudColorContainer.style.backgroundColor = "grey"; 
                    }
                    /*if(number==1){
                        bacgroudColorContainer.style.backgroundColor = "pink";
                    }*/


  /*for(let i=0; i < ArrayOfBacgroudColor2.length; i++){
    //let ArrayOfBacgroudColorReverse = ArrayOfBacgroudColor2.reverse();
        //bacgroudColorContainer.style.backgroundColor = ArrayOfBacgroudColor2[number];
        
     }*/
     
})



buttonReset.onclick = function btnClick(){
    number = 0;
    valueOfNumber.innerText = number;
   if (number===0){
        valueOfNumber.style.color = "black";
       bacgroudColorContainer.style.backgroundColor = "#b3b3b3";
       valueOfBackground.innerText = "#b3b3b3";
      /* if(number==0){
        bacgroudColorContainer.style.backgroundColor = "grey"; 
    }*/
    }
    //console.log(number);
}



