





var targetNumber = [Math.floor(Math.random() * 101) + 19];
console.log(targetNumber)
$("#number-to-guess").text(targetNumber);
var counter = 0;
var wins = 0;
var losses = 0;
// var numberOptions = function(){Math.floor(Math.random() * 11) + 1};
// var numberOptions2 = function(){Math.floor(Math.random() * 11) + 1};
// var numberOptions3 = function(){Math.floor(Math.random() * 11) + 1};
// var numberOptions4 = function(){Math.floor(Math.random() * 11) + 1};
// var gem1num = numberOptions();
// var gem2num = numberOptions2();
// var gem3num = numberOptions3();
// var gem4num = numberOptions4();
var numberOptions = [Math.floor(Math.random() * 11) + 1];
var numberOptions2 = [Math.floor(Math.random() * 11) + 1];
var numberOptions3 = [Math.floor(Math.random() * 11) + 1];
var numberOptions4 = [Math.floor(Math.random() * 11) + 1];
var counterText = document.getElementById("counter-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
function reset(){
var targetNumber = [Math.floor(Math.random() * 101) + 19];
console.log(targetNumber)
$("#number-to-guess").text(targetNumber);
counter = 0;
// gem1();
// gem2();
// gem3();
// gem4();
numberOptions = [] ;
numberOptions2 = [] ;
numberOptions3 = [] ;
numberOptions4 = [] ;
numberOptions = [Math.floor(Math.random() * 11) + 1] ;
numberOptions2 = [Math.floor(Math.random() * 11) + 1] ;
numberOptions3 = [Math.floor(Math.random() * 11) + 1] ;
numberOptions4 = [Math.floor(Math.random() * 11) + 1] ;
imageCrystal.attr("data-crystalvalue", numberOptions[i])
imageCrystal2.attr("data-crystalvalue", numberOptions2[i])
imageCrystal3.attr("data-crystalvalue", numberOptions3[i])
imageCrystal4.attr("data-crystalvalue", numberOptions4[i])
console.log("gem1: " + numberOptions);
console.log("gem2: " + numberOptions2);
console.log("gem3: " + numberOptions3);
console.log("gem4: " + numberOptions4);
// var gem1num = numberOptions();
// var gem2num = numberOptions2();
// var gem3num = numberOptions3();
// var gem4num = numberOptions4();
// console.log("gem1: " + gem1num);
// console.log("gem2: " + gem2num);
// console.log("gem3: " + gem3num);
// console.log("gem4: " + gem4num);
}




function gem1(){
for (var i = 0; i < 1; i++) {
var imageCrystal = $("<img>");
imageCrystal.addClass("crystal-image");
imageCrystal.attr("src", "https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Jewelry-and-Diamonds-PNG/Red_Gem_PNG_Clip_Art_Image.png?m=1507172105");
imageCrystal.attr("data-crystalvalue", numberOptions[i]);
$("#crystals").append(imageCrystal);
console.log("gem1: " + numberOptions[i]);
}
}
// function gem2() {
for (var i = 0; i < 1; i++) {
var imageCrystal2 = $("<img>");
imageCrystal2.addClass("crystal-image");
imageCrystal2.attr("src", "https://www.evilresource.com/images/entities/full/remake/blue-gemstone.png");
imageCrystal2.attr("data-crystalvalue", numberOptions2[i]);
$("#crystals").append(imageCrystal2);
console.log("gem2: " + numberOptions2[i]);
}

// function gem3() {
for (var i = 0; i < 1; i++) {
var imageCrystal3 = $("<img>");
imageCrystal3.addClass("crystal-image");
imageCrystal3.attr("src", "http://mysticalartsbyruby.com/wp-content/uploads/2018/05/green-gem.png");
imageCrystal3.attr("data-crystalvalue", numberOptions3[i]);
$("#crystals").append(imageCrystal3);
console.log("gem3: " + numberOptions3[i]);
}

// function gem4() {
for (var i = 0; i < 1; i++) {
var imageCrystal4 = $("<img>");
imageCrystal4.addClass("crystal-image");
imageCrystal4.attr("src", "https://www.gia.edu/images/garnet-polished-gem.png");
imageCrystal4.attr("data-crystalvalue", numberOptions4[i]);
$("#crystals").append(imageCrystal4);
console.log("gem4: " + numberOptions4[i]);
}

// gem1();
// gem2();
// gem3();
// gem4();

$(".crystal-image").on("click", function() {



var crystalValue = ($(this).attr("data-crystalvalue"));
crystalValue = parseInt(crystalValue);

counter += crystalValue;

// alert("New score: " + counter);

if (counter == targetNumber) {
    alert("You win!");
    wins++;
    reset();
}

else if (counter > targetNumber) {
    alert("You lose!!");
    losses++;
    reset();
}


counterText.textContent = counter;
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses; 

});