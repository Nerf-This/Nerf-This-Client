
'use strict';
var app = app || {};

(function(module) {
  const playerView = {};

  function reset() {
    console.log('reset triggered');
    $('.container').hide();
    $('navigation').slideDown(350);
  }
  //TODO: Flesh out initIndexPage
  playerView.initIndexPage = function() {
    console.log('initindexpage triggered');

    reset();
    $('.search').show();
    $('.main-start').show();

    //Check for localStorage, if exists call initPlayerPage
    console.log('Check for Local Storage', localStorage.playerBattletag);

    // TODO: MOVE THESE LS FUNCTIONS
    // if (localStorage.playerBattletag) {
    //   app.Player.loadPlayer(localStorage.playerPlatform, localStorage.playerRegion, localStorage.playerBattletag);
    // }
    //
    // if (localStorage.opponentBattletag) {
    //   app.Player.comparePlayer(localStorage.opponentPlatform, localStorage.opponentRegion, localStorage.opponentBattletag);
    // }

  }
  //TODO: Flesh out initAboutPage
  playerView.initAboutPage = function() {
    console.log('initaboutpage triggered');
    reset();
    $('.about').show();
  }
  //TODO: Flesh out initAchievementPage
  playerView.initAchievementPage = function() {
    console.log('initachievementpage triggered');
    reset();
    $('.achievement-view').show();
  }

  playerView.initTeamPage = function() {
    reset();
    $('.team-link').show();
  }
  //DONE Complete player stats appending
  playerView.initPlayerPage = function () {
    // #('hide stuffs').hide();

    //Check for localStorage, if exists
    //Append Main Player
    $('#player-detail').empty();
    $('#player-detail').append(allPlayers[0].toHtml('player'));
    $('.player-view').show();
    drawChart();
    console.log('init player page ran');
  }

  playerView.initComparePage = function () {
    // #('hide stuffs').hide();

    //Append Main Player
    $('#compare-detail').empty();
    $('#compare-detail').append(allPlayers[1].toHtml('compare'));
    $('.compare-view').show();
  }

  module.playerView = playerView;
})(app)
