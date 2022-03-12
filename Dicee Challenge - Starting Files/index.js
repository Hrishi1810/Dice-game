var RandomNumber1 = Math.random();
RandomNumber1 = RandomNumber1 *6 +1;
RandomNumber1 = Math.floor(RandomNumber1);

var RandomNumber2 = Math.random();
RandomNumber2 = RandomNumber2 *6 +1;
RandomNumber2 = Math.floor(RandomNumber2);

var firstImage = "dice" + RandomNumber1;
var secondImage = "dice" + RandomNumber2;

//
// document.getElementsByClassName("img1").src = "dice6.png";

if (RandomNumber1 > RandomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Won";
}else if(RandomNumber1 < RandomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Won";
}else {
  document.querySelector("h1").innerHTML = "Draw";
}
firstImage = "images/" + firstImage +".png";
secondImage = "images/" + secondImage +".png";

//
document.querySelector(".img1").src = firstImage;
document.querySelector(".img2").src = secondImage;
