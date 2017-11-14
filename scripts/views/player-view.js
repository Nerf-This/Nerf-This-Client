
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

  module.playerView = playerView;
})(app)
