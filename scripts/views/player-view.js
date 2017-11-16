
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

    //Check for localStorage, if exists
    if (localStorage.playerBattletag) {
      console.log('Local Storage ', localStorage.playerBattletag);
      $('#player-battletag').val(localStorage.playerBattletag);
      app.Player.loadPlayer(localStorage.playerPlatform,localStorage.playerRegion, localStorage.playerBattletag)
    }
    if (localStorage.opponentBattletag) {
      console.log('Local Storage ', localStorage.opponentBattletag);
      $('#opponent-battletag').val(localStorage.opponentBattletag);
    }
  }

  playerView.initIndexPage = function() {
    console.log('initindexpage triggered');

    reset();
    $('#player-start').on('click', function (event) {
      console.log('BattleTag Main Search Clicked');
      event.preventDefault();

      $('.container').hide();
      playerView.initSearchBar();
    })
    $('.main-start').show();
  }
  playerView.initAboutPage = function() {
    console.log('initaboutpage triggered');
    reset();
    $('.about').show();
  }
  playerView.initAchievementPage = function() {
    console.log('initachievementpage triggered');
    reset();
    $('.achievement-view').show();
    playerView.initSearchBar();
  }

  playerView.initTeamPage = function() {
    reset();
    $('.team-link').show();
  }
  playerView.initPlayerPage = function () {

    //Append Main Player
    $('#player-detail').empty();
    $('#player-detail').append(allPlayers[0].toHtml('player'));
    $('.player-view').show();
    drawSingleChart(primaryHeroes, primaryHeroHours);
    console.log('init player page ran');
  }

  playerView.initComparePage = function () {

    //Append Main Player
    $('#primaryChart').hide();
    $('#compare-detail').empty();
    $('#compare-detail').append(allPlayers[1].toHtml('compare'));
    $('.compare-view').show();
    drawCompareChart(primaryHeroes, primaryHeroHours, secondaryHeroHours);
    $('#kd').on('click', function (event) {
      event.preventDefault();
      $('#compare-detail').empty();
      drawCompareChart(primaryHeroes, primaryHeroKD, secondaryHeroKD);
    })
    $('#accuracy').on('click', function (event) {
      event.preventDefault();
      $('#compare-detail').empty();
      drawCompareChart(primaryHeroes, primaryHeroAcc, secondaryHeroAcc);
    })
    $('#damage').on('click', function (event) {
      event.preventDefault();
      $('#compare-detail').empty();
      drawCompareChart(primaryHeroes, primaryDamage, secondaryDamage);
    })
    $('#multikill').on('click', function (event) {
      event.preventDefault();
      $('#compare-detail').empty();
      drawCompareChart(primaryHeroes, primaryMulti, secondaryMulti);
    })
    $('#off-assists').on('click', function (event) {
      event.preventDefault();
      $('#compare-detail').empty();
      drawCompareChart(primaryHeroes, primaryOffAssist, secondaryOffAssist);
    })
    $('#def-assists').on('click', function (event) {
      event.preventDefault();
      $('#compare-detail').empty();
      drawCompareChart(primaryHeroes, primaryDefAssist, secondaryDefAssist);
    })
    $('#elims').on('click', function (event) {
      event.preventDefault();
      $('#compare-detail').empty();
      drawCompareChart(primaryHeroes, primaryHeroElims, secondaryHeroElims);
    })
    $('#env-kills').on('click', function (event) {
      event.preventDefault();
      $('#compare-detail').empty();
      drawCompareChart(primaryHeroes, primaryEnvKills, secondaryEnvKills);
    })
    $('#objective-time').on('click', function (event) {
      event.preventDefault();
      $('#compare-detail').empty();
      drawCompareChart(primaryHeroes, primaryHeroObj, secondaryHeroObj);
    })
    $('#healing').on('click', function (event) {
      event.preventDefault();
      $('#compare-detail').empty();
      drawCompareChart(primaryHeroes, primaryHealing, secondaryHealing);
    })
    $('#damage-blocked').on('click', function (event) {
      event.preventDefault();
      $('#compare-detail').empty();
      drawCompareChart(primaryHeroes, primaryBlocked, secondaryBlocked);
    })
  }

  module.playerView = playerView;
})(app)
