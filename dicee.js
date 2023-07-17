
function roll(){
    var ran1 = Math.floor(Math.random() * 6) + 1;
    var ran2 = Math.floor(Math.random() * 6) + 1;

    diceChanger(ran1, ran2);
}

function diceChanger (ran1, ran2){

    
    var source1 = "images/dice" + ran1 + ".png" ;
    var source2 = "images/dice" + ran2 + ".png" ;

    var img1 = document.querySelectorAll ("img")[0]; 
    var img2 = document.querySelectorAll ("img")[1];
    var header = document.querySelector("h1");


    img1.setAttribute ("src", source1);
    img2.setAttribute("src", source2);

    if (ran1 > ran2)
        header.innerHTML = "Player 1 won!";
    else if (ran1 < ran2)
        header.innerHTML = "Player 2 won!";
    else 
        header.innerHTML = "Tight!";   
    
}

function playSounds (){
    


}