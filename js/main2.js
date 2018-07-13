$(function() {

  var gameStartAudio = new Audio('audio/game-start.m4a')
  var letterAppear = new Audio('audio/letter-appear.wav')
  var modeSelect = new Audio('audio/mode-select.wav')

  setTimeout(mAppear, 500);
  setTimeout(aAppear, 650);
  setTimeout(gAppear, 800);
  setTimeout(iAppear, 950);
  setTimeout(cAppear, 1100);
  setTimeout(royaleAppear, 1250);
  setTimeout(startAppear, 1350);
  setTimeout(instructionsAppear, 1350);

  function mAppear() {
    $(".titleM").fadeIn();
    letterAppear.play()
  }

  function aAppear() {
    $(".titleA").fadeIn();
  }

  function gAppear() {
    $(".titleG").fadeIn();
  }

  function iAppear() {
    $(".titleI").fadeIn();
  }

  function cAppear() {
    $(".titleC").fadeIn();
  }

  function royaleAppear() {
    $(".titleRoyale").fadeIn();
    letterAppear.play();
    gameStartAudio.play();
  }

  function startAppear() {
    $(".start").fadeIn();
  }

  function instructionsAppear() {
    $(".instructions").fadeIn();
  }

  $(".start").click(function () {
    modeSelect.play();
    setTimeout(function () {
      window.location.href="index.html"
    },1000)
  });

  $(".instructions").click(function () {
    modeSelect.play();
    setTimeout(function () {
      window.location.href="instructions.html"
    },1000)
  });

});
