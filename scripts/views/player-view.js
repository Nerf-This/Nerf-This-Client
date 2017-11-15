
'use strict';
var app = app || {};

(function(module) {
  const playerView = {};

  function reset() {
    console.log('reset triggered');
    $('.container').hide();
    $('navigation').slideDown(350);
  }

  playerView.initSearchBar = function() {
    $('.searchload').hide();
    $('.search').show();
  }

  playerView.initIndexPage = function() {
    console.log('initindexpage triggered');

    reset();
    // $('.search').show();
    $('#player-start').on('click', function (event) {
      console.log('BattleTag Main Search Clicked');
      event.preventDefault();

      $('.container').hide();
      playerView.initSearchBar();
      // playerView.initPlayerPage();
    })
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

    //Check for localStorage, if exists
    //Append Main Player
    $('#player-detail').empty();
    $('#player-detail').append(allPlayers[0].toHtml('player'));
    $('.player-view').show();
    drawSingleChart(primaryHeroes, primaryHeroHours);
    console.log('init player page ran');
  }

  playerView.initComparePage = function () {
    // #('hide stuffs').hide();
    // reset();
    //Append Main Player
    $('#primaryChart').hide();
    $('#compare-detail').empty();
    $('#compare-detail').append(allPlayers[1].toHtml('compare'));
    $('.compare-view').show();
    drawCompareChart(primaryHeroes, primaryHeroHours, secondaryHeroHours);
  }

  module.playerView = playerView;
})(app)
