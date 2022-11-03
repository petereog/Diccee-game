var randomNumber1 = Math.floor(Math.random() * 6) +1;

var randomDiceImage ="dice" + randomNumber1 + ".png";

var randomImageSource ="Images/" + randomDiceImage;

var  Image1 = document.querySelectorAll("img")[0];

Image1.setAttribute("src", randomImageSource);




var randomNumber2 = Math.floor(Math.random() * 6) +1;

var randomImageSource2 ="Images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "player 1 wins"
}
else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "player 2 wins"
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}

function add (num1, num2) {
    return num1+num2;
}

function subtract (num1, num2) {
    return num1-num2;
}


function multiply (num1, num2) {
    return num1*num2;
}

function divide (num1, num2) {
    return num1/num2;
}

function calculator (num1, num2, operator){
    return operator(num1, num2)
}