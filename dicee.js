function randomSelector(){
    var num=Math.random();
    num=num*6;
    num=Math.floor(num)+1;
    return num;
}
    var num1=randomSelector();
    var num2=randomSelector();

    var image1="dice"+num1+".png";
    var image2="dice"+num2+".png";

    document.querySelector("img.img1").setAttribute("src",image1);
    document.querySelector("img.img2").setAttribute("src",image2);

   /* if(num1===1){
        document.querySelector("img.img1").setAttribute("src","dice1.png")
    }
    
    else if(num1===2){
        document.querySelector("img.img1").setAttribute("src","dice2.png")
    }
    
    else if(num1===3){
        document.querySelector("img.img1").setAttribute("src","dice3.png")
    }
    
    else if(num1===4){
        document.querySelector("img.img1").setAttribute("src","dice4.png")
    }
    
    else if(num1===5){
        document.querySelector("img.img1").setAttribute("src","dice5.png")
    }
    
    else{
        document.querySelector("img.img1").setAttribute("src","dice6.png")
    }
    
    if(num2===1){
        document.querySelector("img.img2").setAttribute("src","dice1.png")
    }
    
    else if(num2===2){
        document.querySelector("img.img2").setAttribute("src","dice2.png")
    }
    
    else if(num2===3){
        document.querySelector("img.img2").setAttribute("src","dice3.png")
    }
    
    else if(num2===4){
        document.querySelector("img.img2").setAttribute("src","dice4.png")
    }
    
    else if(num2===5){
        document.querySelector("img.img2").setAttribute("src","dice5.png")
    }
    
    else{
        document.querySelector("img.img22").setAttribute("src","dice6.png")
    }
*/

   if(num1>num2){
    document.querySelector("h1").innerHTML=("Player1 win");
   }
   else if(num2>num1){
    document.querySelector("h1").innerHTML=("Player2 win");
   }
   else
   document.querySelector("h1").innerHTML=("draw");
