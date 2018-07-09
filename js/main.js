$(function() {

var player1lightchance = 80;
var player1heavychance = 50;
var player2lightchance = 80;
var player2heavychance = 50;
var player3lightchance = 80;
var player3heavychance = 50;
var player4lightchance = 80;
var player4heavychance = 50;
var playerturn = 1;
var currentround = 1;



$(".players").click(function () {
        if($(this).attr("id") != playerturn) {
          parseInt($("#player1health").attr("value"))
          $("#player"+$(this).attr("id")+"health")[0].value -= 10;
          if (playerturn == 4) {
            playerturn = 1;
            currentround += 1;
          } else playerturn += 1;
        }
        currentTurn();
        currentRound();
    });

function currentTurn() {
  $(".characterturntext").attr("src","images/player-"+playerturn+"-logo.png");
}

function currentRound() {
  $(".currentroundtext").attr("src","images/round-"+currentround+".png");
}




});
