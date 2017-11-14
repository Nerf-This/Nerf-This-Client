
'use strict';
var app = app || {};

(function(module) {
  const playerView = {};

  function reset() {
    $('.container').hide();
    $('navigation').slideDown(350);
  }
  //TODO: Flesh out initIndexPage
  playerView.initIndexPage = function() {
    reset();
    $('.search').show();
  }
  //TODO: Flesh out initAboutPage
  playerView.initAboutPage = function() {
    reset();
    $('.about').show();
  }
  //TODO: Flesh out initAchievementPage
  playerView.initAchievementPage = function() {
    reset();
    $('.achievement-view').show();
  }


  //DONE Complete player stats appending
  playerView.initPlayerPage = function () {
    // #('hide stuffs').hide();

    //Append Main Player
    $('#player-detail').append(allPlayers[0].toHtml('player'));
  }

  playerView.initComparePage = function () {
    // #('hide stuffs').hide();

    //Append Main Player
    $('#compare-detail').append(allPlayers[0].toHtml('compare'));
  }

  // playerView.initTeamPage = function() {
  //   reset();
  //   $('.team-link').show();
  // }

  module.playerView = playerView;
})(app)
