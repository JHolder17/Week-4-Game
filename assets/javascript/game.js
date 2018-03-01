//pick a random number between 19 & 120
var number = 19 + Math.floor(Math.random() * 120);

//display random number
$("#number").html(number);

//set globals
var score = 0;
var newScore = 0;
var wins = 0;
var losses = 0;

//display score 
$("#score").html(score);

//set crystals to random values 1 -12
var red = 1 + Math.floor(Math.random() * 12);
var blue = 1 + Math.floor(Math.random() * 12);
var yellow = 1 + Math.floor(Math.random() * 12);
var green = 1 + Math.floor(Math.random() * 12);

//rest game
function reset() {

    //reset game vars
    score = 0;
    $("#score").html(score);
    newScore = 0;
    red = 1 + Math.floor(Math.random() * 12);
    blue = 1 + Math.floor(Math.random() * 12);
    yellow = 1 + Math.floor(Math.random() * 12);
    green = 1 + Math.floor(Math.random() * 12);
    number = 19 + Math.floor(Math.random() * 120);
    $("#number").html(number);
}

//check for a win
function winCheck() {

    //winner
    if (newScore === number) {

        //update wins
        wins++;

        //update wins in html
        $("#wins").html(wins);

        //reset game
        reset();
    } else if (newScore > number) {

        //update losses
        losses++;

        //update losses in html
        $("#losses").html(losses);

        //reset game
        reset();
    }
}

//game function
function runGame() {

    //display score 
    $("#score").html(score);

    //display random number
    $("#number").html(number);

    //display win / losses
    $("#wins").html(wins);
    $("#losses").html(losses);

    //add red crystal value and score
    $("#red").click(function () {
        newScore += red;

        //update score with new value
        $("#score").html(newScore);

        //check for a win
        winCheck();
    });

    //add blue crystal value and score
    $("#blue").click(function () {
        newScore += blue;

        //update score with new value
        $("#score").html(newScore);

        //check for a win
        winCheck();
    });

    //add yellow crystal value and score
    $("#yellow").click(function () {
        newScore += yellow;

        //update score with new value
        $("#score").html(newScore);

        //check for a win
        winCheck();
    });

    //add green crystal value and score
    $("#green").click(function () {
        newScore += green;

        //update score with new value
        $("#score").html(newScore);

        //check for a win
        winCheck();
    });
}
runGame();