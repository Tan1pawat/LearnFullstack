//version 1
// var randonNumber1 = Math.floor(Math.random()*6+1);
// if(randonNumber1 == 1)document.querySelector(".img1").setAttribute("src","./images/dice1.png");
// if(randonNumber1 == 2)document.querySelector(".img1").setAttribute("src","./images/dice2.png");
// if(randonNumber1 == 3)document.querySelector(".img1").setAttribute("src","./images/dice3.png");
// if(randonNumber1 == 4)document.querySelector(".img1").setAttribute("src","./images/dice4.png");
// if(randonNumber1 == 5)document.querySelector(".img1").setAttribute("src","./images/dice5.png");
// if(randonNumber1 == 6)document.querySelector(".img1").setAttribute("src","./images/dice6.png");


// var randonNumber2 = Math.floor(Math.random()*6+1);
// if(randonNumber2 == 1)document.querySelector(".img2").setAttribute("src","./images/dice1.png");
// if(randonNumber2 == 2)document.querySelector(".img2").setAttribute("src","./images/dice2.png");
// if(randonNumber2 == 3)document.querySelector(".img2").setAttribute("src","./images/dice3.png");
// if(randonNumber2 == 4)document.querySelector(".img2").setAttribute("src","./images/dice4.png");
// if(randonNumber2 == 5)document.querySelector(".img2").setAttribute("src","./images/dice5.png");
// if(randonNumber2 == 6)document.querySelector(".img2").setAttribute("src","./images/dice6.png");

//ver refactor
var randonNumber1 = Math.floor(Math.random()*6)+1
var sourceimg1 = "./images/dice"+randonNumber1+".png"
document.querySelectorAll("img")[0].setAttribute("src",sourceimg1)

var randonNumber2 = Math.floor(Math.random()*6)+1
var sourceimg2 = "./images/dice"+randonNumber2+".png"
document.querySelectorAll("img")[1].setAttribute("src",sourceimg2)

if(randonNumber1 > randonNumber2){
    document.querySelector(".container h1").textContent = "🚩Player1 Win!"
}else if(randonNumber1 < randonNumber2){
    document.querySelector(".container h1").textContent = "Player2 Win!🚩"
}else{
    document.querySelector(".container h1").textContent = "Draw"
}