$(function() {


var currentround = 1;
var playersalive = 4;
var heavyProjectileAudio = new Audio('audio/projectile-light.wav');
var winnerAudio = new Audio('audio/winner.wav');
var playersturns = [1,2,3,4];
var playerturn = 0;



$(".players").click(function () {
        if($(this).attr("id") != playersturns[playerturn]) {
          targetSelect(this);
          if ($("#player"+$(this).attr("id")+"health")[0].value == 0) {
              playerDeath(this);
          }
          if (playerturn >= playersturns.length - 1) {
              changeTurnOrRound();
          } else {
            playerturn += 1;
          }
        }
        currentTurn();
        currentRound();
    });

function changeTurnOrRound() {
    playerturn = 0;
    currentround += 1;
}

function targetSelect(target) {
  parseInt($("#player1health").attr("value"))
  eval("player" + (playerturn + 1) + "vsplayer" + $(target).attr("id") + "heavy")();
  $("#player"+$(target).attr("id")+"health")[0].value -= 20;
}

function playerDeath(player) {
  var newOrder = [];
  $(player).fadeOut();
  $(player).remove();
  $("#player"+$(player).attr("id")+"health")[0].remove();
  for (var i = 0; i < playersturns.length; i++) {
    if (playersturns[i] != $(player).attr("id")) {
      newOrder.push(playersturns[i]);
    }
  }
  playersturns = newOrder;
  console.log(playersturns);
  playersalive -= 1;
  if (playersalive == 1) {
      winnerOfGame();
  }
}


function winnerOfGame() {

  winnerAudio.play();
  $(".winnername").attr("src","images/player-"+$($(".players")[0]).attr("id")+"-victory.png");
  $(".winnername").fadeIn();
  $(".winnerlogo").fadeIn();
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
  $(".characterturntext").attr("src","images/player-"+playersturns[playerturn]+"-logo.png");
}

function currentRound() {
  $(".currentroundtext").attr("src","images/round-"+(currentround)+".png");
}


function player1vsplayer2heavy() {
  $("#1").attr("src","images/player-1-attack.gif");
  $(".player1heavy").css({left: "175px", top: "200px"});
  $(".player1heavy").show();
  $(".player1heavy").animate({left: '+=970'}, 800, function() {
    $(".player1heavy").hide();
    $("#1").attr("src","images/player-1-stand.gif");
  });
  $(".player1heavy").css("-webkit-transform", "rotate(359deg)");
}

function player1vsplayer3heavy() {
  $("#1").attr("src","images/player-1-attack.gif");
  $(".player1heavy").css({left: "175px", top: "200px"});
  $(".player1heavy").show();
  $(".player1heavy").animate({top: '+=300'}, 800, function() {
    $(".player1heavy").hide();
    $("#1").attr("src","images/player-1-stand.gif");
  });
  $(".player1heavy").css("-webkit-transform", "rotate(90deg)");
}

function player1vsplayer4heavy() {
  $("#1").attr("src","images/player-1-attack.gif");
  $(".player1heavy").css({left: "175px", top: "200px"});
  $(".player1heavy").show();
  $(".player1heavy").animate({left: '+=970', top: '+=300'}, 800, function() {
    $(".player1heavy").hide();
    $("#1").attr("src","images/player-1-stand.gif");
  });
  $(".player1heavy").css("-webkit-transform", "rotate(30deg)");
}

function player2vsplayer1heavy() {
  $("#2").attr("src","images/player-2-attack.gif");
  $(".player2heavy").css({right: "200px", top: "175px"});
  $(".player2heavy").show();
  $(".player2heavy").animate({left: '-=970'}, 800, function() {
    $(".player2heavy").hide();
    $("#2").attr("src","images/player-2-stand.gif");
  });
  $(".player2heavy").css("-webkit-transform", "rotate(359deg)");
}

function player2vsplayer3heavy() {
  $("#2").attr("src","images/player-2-attack.gif");
  $(".player2heavy").css({right: "200px", top: "175px"});
  $(".player2heavy").show();
  $(".player2heavy").animate({left: '-=970', top: '+=300'}, 800, function() {
    $(".player2heavy").hide();
    $("#2").attr("src","images/player-2-stand.gif");
  });
  $(".player2heavy").css("-webkit-transform", "rotate(330deg)");
}

function player2vsplayer4heavy() {
  $("#2").attr("src","images/player-2-attack.gif");
  $(".player2heavy").css({right: "200px", top: "175px"});
  $(".player2heavy").show();
  $(".player2heavy").animate({top: '+=300'}, 800, function() {
    $(".player2heavy").hide();
    $("#2").attr("src","images/player-2-stand.gif");
  });
  $(".player2heavy").css("-webkit-transform", "rotate(270deg)");
}

function player3vsplayer1heavy() {
  $("#3").attr("src","images/player-3-attack.gif");
  $(".player3heavy").css({bottom: "185px", left: "220px"});
  $(".player3heavy").show();
  $(".player3heavy").animate({top: '-=300'}, 800, function() {
    $(".player3heavy").hide();
    $("#3").attr("src","images/player-3-stand.gif");
  });
  $(".player3heavy").css("-webkit-transform", "rotate(270deg)");
}

function player3vsplayer2heavy() {
  $("#3").attr("src","images/player-3-attack.gif");
  $(".player3heavy").css({bottom: "185px", left: "220px"});
  $(".player3heavy").show();
  $(".player3heavy").animate({top: '-=300', left: '+=970'}, 800, function() {
    $(".player3heavy").hide();
    $("#3").attr("src","images/player-3-stand.gif");
  });
  $(".player3heavy").css("-webkit-transform", "rotate(330deg)");
}

function player3vsplayer4heavy() {
  $("#3").attr("src","images/player-3-attack.gif");
  $(".player3heavy").css({bottom: "185px", left: "220px"});
  $(".player3heavy").show();
  $(".player3heavy").animate({left: '+=970'}, 800, function() {
    $(".player3heavy").hide();
    $("#3").attr("src","images/player-3-stand.gif");
  });
  $(".player3heavy").css("-webkit-transform", "rotate(5deg)");
}

function player4vsplayer1heavy() {
  $("#4").attr("src","images/player-4-attack.gif");
  $(".player4heavy").css({bottom: "165px", right: "225px"});
  $(".player4heavy").show();
  $(".player4heavy").animate({left: '-=970', top: '-=300'}, 800, function() {
    $(".player4heavy").hide();
    $("#4").attr("src","images/player-4-stand.gif");
  });
  $(".player4heavy").css("-webkit-transform", "rotate(20deg)");
}

function player4vsplayer2heavy() {
  $("#4").attr("src","images/player-4-attack.gif");
  $(".player4heavy").css({bottom: "165px", right: "225px"});
  $(".player4heavy").show();
  $(".player4heavy").animate({top: '-=300'}, 800, function() {
    $(".player4heavy").hide();
    $("#4").attr("src","images/player-4-stand.gif");
  });
  $(".player4heavy").css("-webkit-transform", "rotate(90deg)");
}

function player4vsplayer3heavy() {
  $("#4").attr("src","images/player-4-attack.gif");
  $(".player4heavy").css({bottom: "165px", right: "225px"});
  $(".player4heavy").show();
  $(".player4heavy").animate({left: '-=970'}, 800, function() {
    $(".player4heavy").hide();
    $("#4").attr("src","images/player-4-stand.gif");
  });
  $(".player4heavy").css("-webkit-transform", "rotate(0deg)");
}




});
