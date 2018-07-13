$(function() {


  var currentRound = 1;
  var playersAlive = 4;
  var winnerAudio = new Audio('audio/player-win.wav');
  var deathAudio = new Audio('audio/player-death.wav');
  var targetAudio = new Audio('audio/target-select.wav');
  var hitAudio = new Audio('audio/attack-hit.wav');
  var fireAudio = new Audio('audio/attack-travel.wav');
  var modeSelect = new Audio('audio/mode-select.wav');
  var player1AudioAttack = new Audio('audio/player-1-attack.wav');
  var player2AudioAttack = new Audio('audio/player-2-attack.wav');
  var player3AudioAttack = new Audio('audio/player-3-attack.wav');
  var player4AudioAttack = new Audio('audio/player-4-attack.wav');
  var player1AudioDamage = new Audio('audio/player-1-damage.wav');
  var player2AudioDamage = new Audio('audio/player-2-damage.wav');
  var player3AudioDamage = new Audio('audio/player-3-damage.wav');
  var player4AudioDamage = new Audio('audio/player-4-damage.wav');
  var player1AudioWin = new Audio('audio/player-1-win.wav');
  var player2AudioWin = new Audio('audio/player-2-win.wav');
  var player3AudioWin = new Audio('audio/player-3-win.wav');
  var player4AudioWin = new Audio('audio/player-4-win.wav');
  var player1AudioDeath = new Audio('audio/player-1-death.wav');
  var player2AudioDeath = new Audio('audio/player-2-death.wav');
  var player3AudioDeath = new Audio('audio/player-3-death.wav');
  var player4AudioDeath = new Audio('audio/player-4-death.wav');
  var player1AudioHit = new Audio('audio/player-1-hit.wav');
  var player2AudioHit = new Audio('audio/player-2-hit.wav');
  var player3AudioHit = new Audio('audio/player-3-hit.wav');
  var player4AudioHit = new Audio('audio/player-4-hit.wav');
  var player1AudioMiss = new Audio('audio/player-1-miss.wav');
  var player2AudioMiss = new Audio('audio/player-2-miss.wav');
  var player3AudioMiss = new Audio('audio/player-3-miss.wav');
  var player4AudioMiss = new Audio('audio/player-4-miss.wav');
  var playersTurns = [1,2,3,4];
  var playerTurn = 0;
  var attacksToRun =[];

  fireAudio.volume = 0.5;
  hitAudio.volume = 0.5;
  player1AudioHit.volume = 0.5;
  player2AudioHit.volume = 0.5;
  player3AudioHit.volume = 0.5;
  player4AudioHit.volume = 0.5;
  // targetAudio.volume = 0.7;

  $(".players").click(function () {
          if($(this).attr("id") != playersTurns[playerTurn]) {
            targetSelect(this);
            if (playerTurn >= playersTurns.length - 1) {
                changeTurnOrRound();
            } else {
              playerTurn += 1;
            }
            currentTurn();
          }

      });

  function checkDeath(target) {
    if ($("#player"+target+"health")[0].value <= 0) {
        playerDeath($($("#"+target)[0]));
        eval("player"+target+"AudioDeath.play()");
    } else {
      eval("player"+target+"AudioDamage.play()");
      hitAudio.play();
    }
  }

  function changeTurnOrRound() {
      playerTurn = 0;
      currentRound += 1;
  }

  function executeAttacks() {
      for (var i = 0; i < attacksToRun.length; i++) {
        eval(attacksToRun[i] + "()");
      }
      attacksToRun = [];
  }

  function targetSelect(target) {
    parseInt($("#player"+$(target).attr("id")+"health").attr("value"))
    attacksToRun.push("player" + playersTurns[playerTurn] + "vsplayer" + $(target).attr("id") + "heavy");
    eval("player"+playersTurns[playerTurn]+"AudioAttack.play()");
    targetAudio.play();
    if (attacksToRun.length == playersTurns.length) {
      setTimeout(executeAttacks, 750);
      setTimeout(currentround, 1950);
      setTimeout(currentround, 1950);
      $(".characterturnText").fadeOut();
      $(".currentRoundText").fadeOut();
      $(".phaseText").fadeOut();
      $(".roundText").fadeOut();
      $(".mainreturn").hide();
    }
  }

  function playerDeath(player) {
    var newOrder = [];
    deathAudio.play();
    player.fadeOut();
    player.remove();
    $("#player"+player.attr("id")+"health")[0].remove();
    for (var i = 0; i < playersTurns.length; i++) {
      if (playersTurns[i] != player.attr("id")) {
        newOrder.push(playersTurns[i]);
      }
    }
    playersTurns = newOrder;
    playersAlive -= 1;
    if (playersAlive == 1) {
        winnerOfGame();
    }
    if($(player[0]).attr("id") == (playersTurns[playerTurn] - 1)) {
      $(".characterturnText").attr("src","images/player-"+(playersTurns[playerTurn])+"-logo.png");
    }
  }

  function audioForWinner() {
    eval("player"+$($(".players")[0]).attr("id")+"AudioWin.play()");
  }

  function winnerOfGame() {

    winnerAudio.play();
    $(".winnername").attr("src","images/player-"+$($(".players")[0]).attr("id")+"-victory.png");
    setTimeout(audioForWinner, 1950);
    $(".winnername").fadeIn();
    $(".winnerlogo").fadeIn();
    $(".mainreturn").show();
    $(".characterturnText").hide();
    $(".currentRoundText").hide();
    $(".phaseText").hide();
    $(".roundText").hide();
    $(".player1heavy").hide();
    $(".player2heavy").hide();
    $(".player3heavy").hide();
    $(".player4heavy").hide();
    $(".playersAttack").hide();
    $("#player" + $($(".players")[0]).attr("id") + "health").remove();
    $($(".players")[0]).css({left: "665px", top: "275px"});
  }


  function currentTurn() {
    $(".characterturnText").attr("src","images/player-"+playersTurns[playerTurn]+"-logo.png");
  }

  function currentround() {
    if (playersAlive >= 2) {
      $(".currentRoundText").attr("src","images/round-"+(currentRound)+".png");
      $(".characterturnText").fadeIn();
      $(".currentRoundText").fadeIn();
      $(".phaseText").fadeIn();
      $(".roundText").fadeIn();
      $(".mainreturn").show();
      $(".player4heavy").css({"top": "485px", "left": "1145px"});
      $(".player1heavy").css({"left": "175px", "top": "175px"});
      $(".player2heavy").css({"left": "1145px", "top": "175px"});
      $(".player3heavy").css({"top": "485px", "left": "220px"});
    }
  }

  function player1vsplayer2heavy() {
    $(".playerAttack1").show();
    $(".player1").hide();
    $(".player1heavy").show();
    fireAudio.play();
    player1AudioHit.play();
    $(".player1heavy").animate({left: '+=970'}, 800, function() {
      $(".player1heavy").hide();
      $(".playerAttack1").hide();
      $(".player1").show();
      $("#player2health")[0].value -= 20;
      $("#2").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      checkDeath("2");
    });
    $(".player1heavy").css("-webkit-transform", "rotate(359deg)");

  }

  function player1vsplayer3heavy() {
    $(".playerAttack1").show();
    $(".player1").hide();
    $(".player1heavy").show();
    fireAudio.play();
    player1AudioHit.play();
    $(".player1heavy").animate({top: '+=300'}, 800, function() {
      $(".player1heavy").hide();
      $(".playerAttack1").hide();
      $(".player1").show();
      $("#player3health")[0].value -= 20;
      $("#3").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      checkDeath("3");
    });
    $(".player1heavy").css("-webkit-transform", "rotate(90deg)");
  }

  function player1vsplayer4heavy() {
    $(".playerAttack1").show();
    $(".player1").hide();
    $(".player1heavy").show();
    fireAudio.play();
    player1AudioHit.play();
    $(".player1heavy").animate({left: '+=970', top: '+=300'}, 800, function() {
      $(".player1heavy").hide();
      $(".playerAttack1").hide();
      $(".player1").show();
      $("#player4health")[0].value -= 20;
      $("#4").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      checkDeath("4");
    });
    $(".player1heavy").css("-webkit-transform", "rotate(30deg)");
  }

  function player2vsplayer1heavy() {
    $(".playerAttack2").show();
    $(".player2").hide();
    $(".player2heavy").show();
    fireAudio.play();
    player2AudioHit.play();
    $(".player2heavy").animate({left: '-=970'}, 800, function() {
      $(".player2heavy").hide();
      $(".playerAttack2").hide();
      $(".player2").show();
      $("#player1health")[0].value -= 20;
      $("#1").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      checkDeath("1");
    });
    $(".player2heavy").css("-webkit-transform", "rotate(359deg)");
  }

  function player2vsplayer3heavy() {
    $(".playerAttack2").show();
    $(".player2").hide();
    $(".player2heavy").show();
    fireAudio.play();
    player2AudioHit.play();
    $(".player2heavy").animate({left: '-=970', top: '+=300'}, 800, function() {
      $(".player2heavy").hide();
      $(".playerAttack2").hide();
      $(".player2").show();
      $("#player3health")[0].value -= 20;
      $("#3").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      checkDeath("3");
    });
    $(".player2heavy").css("-webkit-transform", "rotate(330deg)");
  }

  function player2vsplayer4heavy() {
    $(".playerAttack2").show();
    $(".player2").hide();
    $(".player2heavy").show();
    fireAudio.play();
    player2AudioHit.play();
    $(".player2heavy").animate({top: '+=300'}, 800, function() {
      $(".player2heavy").hide();
      $(".playerAttack2").hide();
      $(".player2").show();
      $("#player4health")[0].value -= 20;
      $("#4").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      checkDeath("4");
    });
    $(".player2heavy").css("-webkit-transform", "rotate(270deg)");
  }

  function player3vsplayer1heavy() {
    $(".playerAttack3").show();
    $(".player3").hide();
    $(".player3heavy").show();
    fireAudio.play();
    player3AudioHit.play();
    $(".player3heavy").animate({top: '-=300'}, 800, function() {
      $(".player3heavy").hide();
      $(".playerAttack3").hide();
      $(".player3").show();
      $("#player1health")[0].value -= 20;
      $("#1").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      checkDeath("1");
    });
    $(".player3heavy").css("-webkit-transform", "rotate(270deg)");
  }

  function player3vsplayer2heavy() {
    $(".playerAttack3").show();
    $(".player3").hide();
    $(".player3heavy").show();
    fireAudio.play();
    player3AudioHit.play();
    $(".player3heavy").animate({top: '-=300', left: '+=970'}, 800, function() {
      $(".player3heavy").hide();
      $(".playerAttack3").hide();
      $(".player3").show();
      $("#player2health")[0].value -= 20;
      $("#2").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      checkDeath("2");
    });
    $(".player3heavy").css("-webkit-transform", "rotate(330deg)");
  }

  function player3vsplayer4heavy() {
    $(".playerAttack3").show();
    $(".player3").hide();
    $(".player3heavy").show();
    fireAudio.play();
    player3AudioHit.play();
    $(".player3heavy").animate({left: '+=970'}, 800, function() {
      $(".player3heavy").hide();
      $(".playerAttack3").hide();
      $(".player3").show();
      $("#player4health")[0].value -= 20;
      $("#4").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      checkDeath("4");
    });
    $(".player3heavy").css("-webkit-transform", "rotate(5deg)");
  }

  function player4vsplayer1heavy() {
    $(".playerAttack4").show();
    $(".player4").hide();
    $(".player4heavy").show();
    fireAudio.play();
    player4AudioHit.play();
    $(".player4heavy").animate({left: '-=970', top: '-=300'}, 800, function() {
      $(".player4heavy").hide();
      $(".playerAttack4").hide();
      $(".player4").show();
      $("#player1health")[0].value -= 20;
      $("#1").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      checkDeath("1");
    });
    $(".player4heavy").css("-webkit-transform", "rotate(20deg)");
  }

  function player4vsplayer2heavy() {
    $(".playerAttack4").show();
    $(".player4").hide();
    $(".player4heavy").show();
    fireAudio.play();
    player4AudioHit.play();
    $(".player4heavy").animate({top: '-=300'}, 800, function() {
      $(".player4heavy").hide();
      $(".playerAttack4").hide();
      $(".player4").show();
      $("#player2health")[0].value -= 20;
      $("#2").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      checkDeath("2");
    });
    $(".player4heavy").css("-webkit-transform", "rotate(90deg)");
  }

  function player4vsplayer3heavy() {
    $(".playerAttack4").show();
    $(".player4").hide();
    $(".player4heavy").show();
    fireAudio.play();
    player4AudioHit.play();
    $(".player4heavy").animate({left: '-=970'}, 800, function() {
      $(".player4heavy").hide();
      $(".playerAttack4").hide();
      $(".player4").show();
      $("#player3health")[0].value -= 20;
      $("#3").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      checkDeath("3");
    });
    $(".player4heavy").css("-webkit-transform", "rotate(0deg)");
  }

  $(".return").click(function () {
    modeSelect.play();
    setTimeout(function () {
      window.location.href="start.html"
    },1000)
  });

  $(".mainreturn").click(function () {
    modeSelect.play();
    setTimeout(function () {
      window.location.href="start.html"
    },1000)

  });




});
