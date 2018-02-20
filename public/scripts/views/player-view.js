'use strict';
/* eslint-disable */
var app = app || {};

(function(module) {
  const playerView = {};

  function reset() {
    $('.container').hide();
    $('navigation').slideDown(350);
  }

  playerView.initSearchBar = function() {
    $('.searchload').hide();
    $('.search').show();

    //Check for localStorage, if exists
    if (localStorage.playerBattletag) {
      $('#player-battletag').val(localStorage.playerBattletag);
      $('#searchload-player').fadeIn(250);
      app.Player.loadPlayer(localStorage.playerPlatform,localStorage.playerRegion, localStorage.playerBattletag)
    }
    if (localStorage.opponentBattletag) {
      $('#opponent-battletag').val(localStorage.opponentBattletag);
    }
  }

  playerView.initIndexPage = function() {
    reset();
    $('.main-start').show();
  }
  playerView.initProfilePage = function() {
    $('.container').hide();
    playerView.initSearchBar();
    $('#secondary-tag').hide();
    $('#compare-player-button').show();
    $('#compare-player-button').on('click', function(e){
      e.preventDefault();
      page('/compare');
    })
  }
  playerView.initAboutPage = function() {
    reset();
    $('.about').show();
  }
  playerView.initOpponentPage = function() {
    reset();
    $('.achievement-view').show();
    playerView.initSearchBar();
    $('#compare-player-button').hide();
    $('#secondary-tag').show();
  }

  playerView.initPlayerPage = function () {

    //Append Main Player
    $('#player-detail').empty();
    $('#player-detail').append(allPlayers[0].toHtml('player'));
    $('.player-view').show();
    destroyChart();
    drawSingleChart(primaryHeroes, primaryHeroHours);
    $('#kd1').on('click', function (event) {
      event.preventDefault();
      destroySolo();
      drawSingleChart(primaryHeroes, primaryHeroKD);
    })
    $('#accuracy1').on('click', function (event) {
      event.preventDefault();
      destroySolo();
      drawSingleChart(primaryHeroes, primaryHeroAcc);
    })
    $('#damage1').on('click', function (event) {
      event.preventDefault();
      destroySolo();
      drawSingleChart(primaryHeroes, primaryDamage);
    })
    $('#multikill1').on('click', function (event) {
      event.preventDefault();
      destroySolo();
      drawSingleChart(primaryHeroes, primaryMulti);
    })
    $('#off-assists1').on('click', function (event) {
      event.preventDefault();
      destroySolo();
      drawSingleChart(primaryHeroes, primaryOffAssist);
    })
    $('#def-assists1').on('click', function (event) {
      event.preventDefault();
      destroySolo();
      drawSingleChart(primaryHeroes, primaryDefAssist);
    })
    $('#elims1').on('click', function (event) {
      event.preventDefault();
      destroySolo();
      drawSingleChart(primaryHeroes, primaryHeroElims);
    })
    $('#objective-time1').on('click', function (event) {
      event.preventDefault();
      destroySolo();
      drawSingleChart(primaryHeroes, primaryHeroObj);
    })
    $('#healing1').on('click', function (event) {
      event.preventDefault();
      destroySolo();
      drawSingleChart(primaryHeroes, primaryHealing);
    })
    $('#damage-blocked1').on('click', function (event) {
      event.preventDefault();
      destroySolo();
      drawSingleChart(primaryHeroes, primaryBlocked);
    })
  }

  playerView.initComparePage = function () {

    //Append Main Player
    $('#primaryChart').hide();
    $('#solo-stat-buttons').hide();
    $('#compare-detail').empty();
    $('.search').hide();
    $('#compare-detail').append(allPlayers[1].toHtml('compare'));
    $('.compare-view').show();
    drawCompareChart(primaryHeroes, primaryHeroHours, secondaryHeroHours);
    $('#kd').on('click', function (event) {
      event.preventDefault();
      destroyChart();
      drawCompareChart(primaryHeroes, primaryHeroKD, secondaryHeroKD);
    })
    $('#accuracy').on('click', function (event) {
      event.preventDefault();
      destroyChart();
      drawCompareChart(primaryHeroes, primaryHeroAcc, secondaryHeroAcc);
    })
    $('#damage').on('click', function (event) {
      event.preventDefault();
      destroyChart();
      drawCompareChart(primaryHeroes, primaryDamage, secondaryDamage);
    })
    $('#multikill').on('click', function (event) {
      event.preventDefault();
      destroyChart();
      drawCompareChart(primaryHeroes, primaryMulti, secondaryMulti);
    })
    $('#off-assists').on('click', function (event) {
      event.preventDefault();
      destroyChart();
      drawCompareChart(primaryHeroes, primaryOffAssist, secondaryOffAssist);
    })
    $('#def-assists').on('click', function (event) {
      event.preventDefault();
      destroyChart();
      drawCompareChart(primaryHeroes, primaryDefAssist, secondaryDefAssist);
    })
    $('#elims').on('click', function (event) {
      event.preventDefault();
      destroyChart();
      drawCompareChart(primaryHeroes, primaryHeroElims, secondaryHeroElims);
    })
    $('#objective-time').on('click', function (event) {
      event.preventDefault();
      destroyChart();
      drawCompareChart(primaryHeroes, primaryHeroObj, secondaryHeroObj);
    })
    $('#healing').on('click', function (event) {
      event.preventDefault();
      destroyChart();
      drawCompareChart(primaryHeroes, primaryHealing, secondaryHealing);
    })
    $('#damage-blocked').on('click', function (event) {
      event.preventDefault();
      destroyChart();
      drawCompareChart(primaryHeroes, primaryBlocked, secondaryBlocked);
    })
  }

  module.playerView = playerView;
})(app)
