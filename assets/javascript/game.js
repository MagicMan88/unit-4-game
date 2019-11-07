$(document).ready(function() {
// Random number to be shown at the start of the g
// Number needs to be between 19 - 120
var random = Math.floor(Math.random() * 101 + 19)
$("#random-number").text(random);


// Create variables for userTotal, wins and losses.
// These are tallied up to keep score.
var totalScore = 0;
var wins = 0;
var losses = 0;


$("#wins").text(Wins);
$("#losses").text(Losses);


// Reset the game.
function reset () {
    random = Math.floor(Math.random() * 101 + 19);
    console.log(random);
    $("#random-number").text(random);
    var crystal1 = Math.floor(Math.random() * 12);
    var crystal2 = Math.floor(Math.random() * 12);
    var crystal3 = Math.floor(Math.random() * 12);
    var crystal4 = Math.floor(Math.random() * 12);
    totalScore = 0;
    $("total-score").text(totalScore);
}


// Set up a random number for each jewel.
// Number needs to be between 1 - 12.
var crystal1 = Math.floor(Math.random() * 12);
var crystal2 = Math.floor(Math.random() * 12);
var crystal3 = Math.floor(Math.random() * 12);
var crystal4 = Math.floor(Math.random() * 12);


// Create click events for the crystals.
$("#crystal1").on("click", function() {
    totalScore = totalScore + crystal1;
    console.log("New total score = " + totalScore);
    $("#total-score").text(totalScore);
        if (totalScore === random) {
            win ();
        }
        else if (totalScore > random) {
            lose ();
        }
    });
$("#crystal2").on("click", function() {
    totalScore = totalScore + crystal2;
    console.log("New total score = " + totalScore);
    $("#total-score").text(totalScore);
        if (totalScore === random) {
            win ();
        }
        else if (totalScore > random) {
            lose ();
        }
    });
$("#crystal3").on("click", function() {
    totalScore = totalScore + crystal3;
    console.log("New total score = " + totalScore);
    $("#total-score").text(totalScore);
        if (totalScore === random) {
            win ();
        }
        else if (totalScore > random) {
            lose ();
        }
    });
$("#crystal4").on("click", function() {
    totalScore = totalScore + crystal4;
    console.log("New total score = " + totalScore);
    $("#total-score").text(totalScore);
        if (totalScore === random) {
            win ();
        }
        else if (totalScore > random) {
            lose ();
        }
    });
});