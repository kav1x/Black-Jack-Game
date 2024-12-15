let x;
let curentTT;
let totle;

function main(){
    let comfirm = document.getElementById("mainResult").innerHTML;
    if(comfirm == "You Lost"){
        alert("Game Over! Please restart the game.")
    }
    else{

    
    do{
    x = Math.floor(Math.random()*100/7.6);
    }while(x==0);

    curentTT = parseInt(document.getElementById("result").innerHTML);
    totle = curentTT + x;
    document.getElementById("result").innerHTML = totle;

    if (totle < 21) {
        document.getElementById("mainResult").innerHTML = "Genarate another card?"
        
    }
    else if(totle == 21){
        document.getElementById("mainResult").innerHTML = "You've Won !!"
        alert("Congratulation");
        document.getElementById("but-res").style.display = "block";

    }
    else if(totle > 2){
        document.getElementById("mainResult").innerHTML = "You Lost"
        alert("Lost. click restart to play again");
        document.getElementById("but-res").style.display = "block";
    }

    var img = document.createElement("img");
    img.src = "images/"+x+".png";
    img.height = 200;

    document.body.appendChild(img);
    }

   
}
function restart(){
    location.reload();
}

