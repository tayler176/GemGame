

'use strict'

// Created a function that selects a random number between 1 and 12.
function getNumber() {
    let randomNumber = Math.floor(Math.random() * 11) + 1;
    console.log("random number is:" + randomNumber);
    return randomNumber;
}

// Created a second function that selects a number between 19 and 119.
function getTargetNumber() {
    let randomTargetNumber = Math.floor(Math.random() * 100) + 19;
    console.log("random number is:" + randomTargetNumber);
    return randomTargetNumber;
}

// Runs the second function to make the variable targetNumber, then push the targetNumber into the HTML page to make the number visiable to the user. Also console logs the targetNumber
var targetNumber = getTargetNumber();
console.log(targetNumber)
$("#number-to-guess").text(targetNumber);

// Creates the variables to hold the Usertotal(counter), wins and losses
var counter = 0;
var wins = 0;
var losses = 0;
//Writes the previous variables onto the HTML
var counterText = document.getElementById("counter-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");


// Runs the first function to and makes the varibales equal to the reandomly selected number, will later be attached to the gems.
var numberOptions = getNumber();
var numberOptions2 = getNumber();
var numberOptions3 = getNumber();
var numberOptions4 = getNumber();

// This is the Reset Function, it reselects the random target number and pushes it back to the HTML so the new target is viewable by the user, the function the reset the counter to 0, then resets the gem numbers to 0 then runs the random number function to select a random number there attributes the the random number to the gem pictures and then console logs.
function reset(){
    targetNumber = getTargetNumber();
    console.log(targetNumber)
    $("#number-to-guess").text(targetNumber);
    counter = 0;
    numberOptions = 0;
    numberOptions2 = 0;
    numberOptions3 = 0;
    numberOptions4 = 0;
    numberOptions =  getNumber();
    numberOptions2 = getNumber();
    numberOptions3 = getNumber();
    numberOptions4 = getNumber();
    imageCrystal.attr("data-crystalvalue", numberOptions)
    imageCrystal2.attr("data-crystalvalue", numberOptions2)
    imageCrystal3.attr("data-crystalvalue", numberOptions3)
    imageCrystal4.attr("data-crystalvalue", numberOptions4)
    console.log("gem1: " + numberOptions);
    console.log("gem2: " + numberOptions2);
    console.log("gem3: " + numberOptions3);
    console.log("gem4: " + numberOptions4);
    
}



//The next 4 for loops create a the gems documents them on the HTML, then pushes an image on the into HTML, then when the user clicks on the number it increases the counter by the random number. Then console logs the random number
// function gem1(){
for (var i = 0; i < 1; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Jewelry-and-Diamonds-PNG/Red_Gem_PNG_Clip_Art_Image.png?m=1507172105");
    imageCrystal.attr("data-crystalvalue", numberOptions);
    $("#crystals").append(imageCrystal);
    console.log("gem1: " + numberOptions);
}

// function gem2() {
for (var i = 0; i < 1; i++) {
    var imageCrystal2 = $("<img>");
    imageCrystal2.addClass("crystal-image");
    imageCrystal2.attr("src", "https://www.evilresource.com/images/entities/full/remake/blue-gemstone.png");
    imageCrystal2.attr("data-crystalvalue", numberOptions2);
    $("#crystals").append(imageCrystal2);
    console.log("gem2: " + numberOptions2);
}

// function gem3() {
for (var i = 0; i < 1; i++) {
    var imageCrystal3 = $("<img>");
    imageCrystal3.addClass("crystal-image");
    imageCrystal3.attr("src", "http://mysticalartsbyruby.com/wp-content/uploads/2018/05/green-gem.png");
    imageCrystal3.attr("data-crystalvalue", numberOptions3);
    $("#crystals").append(imageCrystal3);
    console.log("gem3: " + numberOptions3);
}

// function gem4() {
for (var i = 0; i < 1; i++) {
    var imageCrystal4 = $("<img>");
    imageCrystal4.addClass("crystal-image");
    imageCrystal4.attr("src", "https://www.gia.edu/images/garnet-polished-gem.png");
    imageCrystal4.attr("data-crystalvalue", numberOptions4);
    $("#crystals").append(imageCrystal4);
    console.log("gem4: " + numberOptions4);
}

// gem1();
// gem2();
// gem3();
// gem4();

// creates a function that starts the game when the user clicks on the one of the 4 previously created images it starts the game by adding the number associated with the gem that was clicked to the counter
$(".crystal-image").on("click", function() {



var crystalValue = ($(this).attr("data-crystalvalue"));
crystalValue = parseInt(crystalValue);

counter += crystalValue;

// alert("New score: " + counter);

//if the counter equals the target number then the user gets alerted, a win is added to the win total and the reset function is run
if (counter == targetNumber) {
    alert("You win!");
    wins++;
    reset();
}

//if the counter is greater than the target number the the user gets alerted and a loss is added to the the loss total and the reset function is run
else if (counter > targetNumber) {
    alert("You lose!!");
    losses++;
    reset();
}

// is this the code that writes the counter, win, and losses totals on the HTML for the user to view.
counterText.textContent = counter;
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses; 

});

//TODO: Start game, Reset game functions