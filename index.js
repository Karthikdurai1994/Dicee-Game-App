var randonNumber1=Math.random();
randonNumber1=Math.floor((randonNumber1*6)+1);
var imageSource="dice"+randonNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",imageSource);

var randonNumber2=Math.random();
randonNumber2=Math.floor(randonNumber2*6)+1;
var imageSource="dice"+randonNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imageSource);


if(randonNumber1>randonNumber2){
  document.querySelector("h1").innerHTML="Player 1 Wins!!!";
}
else if(randonNumber1<randonNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!!!";
}
else if(randonNumber1==randonNumber2){
    document.querySelector("h1").innerHTML="Game Drawn!!!";
}
