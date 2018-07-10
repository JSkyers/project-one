$(function() {

var playerturn = 1;
var currentround = 1;
var playersalive = 4;
var heavyProjectileAudio = new Audio('audio/projectile-light.wav');



$(".players").click(function () {
        if($(this).attr("id") != playerturn) {
          parseInt($("#player1health").attr("value"))
          $("#player"+$(this).attr("id")+"health")[0].value -= 20;
          eval("player" + playerturn + "vsplayer" + $(this).attr("id") + "heavy")();
          if ($("#player"+$(this).attr("id")+"health")[0].value == 0) {
              $(".player"+$(this).attr("id")).fadeOut();
              $(".player"+$(this).attr("id")).remove();
              $("#player"+$(this).attr("id")+"health")[0].remove();
              playersalive -= 1;
              if (playersalive == 1) {
                  winnerOfGame();
              }
          }
          if (playerturn == playersalive && playersalive != 1) {
            playerturn = 1;
            currentround += 1;
          } else{
            playerturn += 1;
          }
        }
        currentTurn();
        currentRound();
    });


function winnerOfGame() {

  $(".winnername").attr("src","images/player-"+$($(".players")[0]).attr("id")+"-victory.png");
  $(".winnername").show();
  $(".winnerlogo").show();
  $(".mainreturn").show();
  $(".characterturntext").hide();
  $(".currentroundtext").hide();
  $(".phasetext").hide();
  $(".roundtext").hide();
  $(".player1heavy").hide();
  $(".player2heavy").hide();
  $(".player3heavy").hide();
  $(".player4heavy").hide();
  $("#player" + $($(".players")[0]).attr("id") + "health").remove();
  $($(".players")[0]).css({left: "480px", top: "175px"});
}


function currentTurn() {
  $(".characterturntext").attr("src","images/player-"+playerturn+"-logo.png");
}

function currentRound() {
  $(".currentroundtext").attr("src","images/round-"+currentround+".png");
}


function player1vsplayer2heavy() {
  $("#1").attr("src","images/player-"+playerturn+"-attack.gif");
  $(".player1heavy").css({left: "175px", top: "200px"});
  $(".player1heavy").show();
  $(".player1heavy").animate({left: '+=970'}, 800, function() {
    $(".player1heavy").hide();
    $("#1").attr("src","images/player-1-stand.gif");
  });
  $(".player1heavy").css("-webkit-transform", "rotate(359deg)");
}

function player1vsplayer3heavy() {
  $("#1").attr("src","images/player-"+playerturn+"-attack.gif");
  $(".player1heavy").css({left: "175px", top: "200px"});
  $(".player1heavy").show();
  $(".player1heavy").animate({top: '+=300'}, 800, function() {
    $(".player1heavy").hide();
    $("#1").attr("src","images/player-1-stand.gif");
  });
  $(".player1heavy").css("-webkit-transform", "rotate(90deg)");
}

function player1vsplayer4heavy() {
  $("#1").attr("src","images/player-"+playerturn+"-attack.gif");
  $(".player1heavy").css({left: "175px", top: "200px"});
  $(".player1heavy").show();
  $(".player1heavy").animate({left: '+=970', top: '+=300'}, 800, function() {
    $(".player1heavy").hide();
    $("#1").attr("src","images/player-1-stand.gif");
  });
  $(".player1heavy").css("-webkit-transform", "rotate(30deg)");
}

function player2vsplayer1heavy() {
  $("#2").attr("src","images/player-"+playerturn+"-attack.gif");
  $(".player2heavy").css({right: "200px", top: "175px"});
  $(".player2heavy").show();
  $(".player2heavy").animate({left: '-=970'}, 800, function() {
    $(".player2heavy").hide();
    $("#2").attr("src","images/player-2-stand.gif");
  });
  $(".player2heavy").css("-webkit-transform", "rotate(359deg)");
}

function player2vsplayer3heavy() {
  $("#2").attr("src","images/player-"+playerturn+"-attack.gif");
  $(".player2heavy").css({right: "200px", top: "175px"});
  $(".player2heavy").show();
  $(".player2heavy").animate({left: '-=970', top: '+=300'}, 800, function() {
    $(".player2heavy").hide();
    $("#2").attr("src","images/player-2-stand.gif");
  });
  $(".player2heavy").css("-webkit-transform", "rotate(330deg)");
}

function player2vsplayer4heavy() {
  $("#2").attr("src","images/player-"+playerturn+"-attack.gif");
  $(".player2heavy").css({right: "200px", top: "175px"});
  $(".player2heavy").show();
  $(".player2heavy").animate({top: '+=300'}, 800, function() {
    $(".player2heavy").hide();
    $("#2").attr("src","images/player-2-stand.gif");
  });
  $(".player2heavy").css("-webkit-transform", "rotate(270deg)");
}

function player3vsplayer1heavy() {
  $("#3").attr("src","images/player-"+playerturn+"-attack.gif");
  $(".player3heavy").css({bottom: "185px", left: "220px"});
  $(".player3heavy").show();
  $(".player3heavy").animate({top: '-=300'}, 800, function() {
    $(".player3heavy").hide();
    $("#3").attr("src","images/player-3-stand.gif");
  });
  $(".player3heavy").css("-webkit-transform", "rotate(270deg)");
}

function player3vsplayer2heavy() {
  $("#3").attr("src","images/player-"+playerturn+"-attack.gif");
  $(".player3heavy").css({bottom: "185px", left: "220px"});
  $(".player3heavy").show();
  $(".player3heavy").animate({top: '-=300', left: '+=970'}, 800, function() {
    $(".player3heavy").hide();
    $("#3").attr("src","images/player-3-stand.gif");
  });
  $(".player3heavy").css("-webkit-transform", "rotate(330deg)");
}

function player3vsplayer4heavy() {
  $("#3").attr("src","images/player-"+playerturn+"-attack.gif");
  $(".player3heavy").css({bottom: "185px", left: "220px"});
  $(".player3heavy").show();
  $(".player3heavy").animate({left: '+=970'}, 800, function() {
    $(".player3heavy").hide();
    $("#3").attr("src","images/player-3-stand.gif");
  });
  $(".player3heavy").css("-webkit-transform", "rotate(5deg)");
}

function player4vsplayer1heavy() {
  $("#4").attr("src","images/player-"+playerturn+"-attack.gif");
  $(".player4heavy").css({bottom: "165px", right: "225px"});
  $(".player4heavy").show();
  $(".player4heavy").animate({left: '-=970', top: '-=300'}, 800, function() {
    $(".player4heavy").hide();
    $("#4").attr("src","images/player-4-stand.gif");
  });
  $(".player4heavy").css("-webkit-transform", "rotate(20deg)");
}

function player4vsplayer2heavy() {
  $("#4").attr("src","images/player-"+playerturn+"-attack.gif");
  $(".player4heavy").css({bottom: "165px", right: "225px"});
  $(".player4heavy").show();
  $(".player4heavy").animate({top: '-=300'}, 800, function() {
    $(".player4heavy").hide();
    $("#4").attr("src","images/player-4-stand.gif");
  });
  $(".player4heavy").css("-webkit-transform", "rotate(90deg)");
}

function player4vsplayer3heavy() {
  $("#4").attr("src","images/player-"+playerturn+"-attack.gif");
  $(".player4heavy").css({bottom: "165px", right: "225px"});
  $(".player4heavy").show();
  $(".player4heavy").animate({left: '-=970'}, 800, function() {
    $(".player4heavy").hide();
    $("#4").attr("src","images/player-4-stand.gif");
  });
  $(".player4heavy").css("-webkit-transform", "rotate(0deg)");
}






});
