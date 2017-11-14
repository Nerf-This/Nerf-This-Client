
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

  // playerView.initTeamPage = function() {
  //   reset();
  //   $('.team-link').show();
  // }

  module.playerView = playerView;
})(app)
