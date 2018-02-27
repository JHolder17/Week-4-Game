//pick a random number between 19 & 120
var number = 101 + Math.floor(Math.random() * 120);

//display random number
$("#number").html(number);

//set score to 0 initally
var score = 0;

//display score 
$("#score").html(score);

//set crystals to random values 1 -12
var red = 1 + Math.floor(Math.random() * 12);
var blue = 1 + Math.floor(Math.random() * 12);
var yellow = 1 + Math.floor(Math.random() * 12);
var green = 1 + Math.floor(Math.random() * 12);


//add red crystal value and score
$( "#red" ).click(function() {
    var newScore = score + red;
    $("#score").html(newscore);

});