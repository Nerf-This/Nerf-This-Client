'use strict';

var app = app || {};
var __API_URL__ = 'https://owjs.ovh';
let allPlayers = [];

(function(module) {
  //Player constructor function
  function Player(data) {
    console.log('constructor triggered');
    this.profile = data.profile,
    this.quickplay = data.quickplay.global,
    this.heroes = data.quickplay.heroes,
    this.achievements = data.achievements
  }

  //API call for player data
  Player.loadPlayer = function (platform, region, battletag) {
    console.log('Players battletag', battletag);
    $.get(`${__API_URL__}/all/${platform}/${region}/${battletag}`, function (data) {
      allPlayers[0] = new Player(data)
      console.log('inside api call');
      // app.playerView.initPlayerPage();
    }).then(app.playerView.initPlayerPage);

  }
  Player.comparePlayer = function (platform, region, battletag) {
    console.log(battletag);
    $.get(`${__API_URL__}/all/${platform}/${region}/${battletag}`, function (data){
      allPlayers[1] = new Player(data);
      console.log('Inside the compare player API call');
    }).then(app.playerView.initComparePage);
  }
  Player.getPlayer = function (next) {
    $('#primary-tag').on('submit', function(event) {
      event.preventDefault();
      let platform = event.target.platform.value.toLowerCase();
      let region = event.target.region.value.toLowerCase();
      let battletag = event.target.battletag.value.split('#').join('-');
      localStorage.playerBattletag = battletag;
      localStorage.playerPlatform = platform;
      localStorage.playerRegion = region;
      console.log(battletag, region, platform);
      Player.loadPlayer(platform, region, battletag);
    })
  }
  Player.getOpponent = function () {
    $('#secondary-tag').on('submit', function(event){
      event.preventDefault();
      let platform = event.target.platform.value.toLowerCase();
      let region = event.target.region.value.toLowerCase();
      let battletag = event.target.battletag.value.split('#').join('-');
      localStorage.opponentBattletag = battletag;
      localStorage.opponentPlatform = platform;
      localStorage.opponentRegion = region;
      console.log(platform, region, battletag);
      Player.comparePlayer(platform, region, battletag);
    })
  }
  // Templating with Handlebars
  Player.prototype.toHtml = function(type) {
    let template = Handlebars.compile($(`#${type}-view-template`).text());

    return template(this);
  };

  Player.getPlayer();
  Player.getOpponent();
  module.Player = Player;
})(app)
