
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
  //DONE Complete player stats appending
  playerView.initPlayerPage = function () {
    // #('hide stuffs').hide();

    //Append Main Player
    $('#player-detail').append(allPlayers[0].toHtml('player'));
    $('.player-view').show();
  }

  playerView.initComparePage = function () {
    // #('hide stuffs').hide();

    //Append Main Player
    $('#compare-detail').append(allPlayers[0].toHtml('compare'));
  }

  module.playerView = playerView;
})(app)
