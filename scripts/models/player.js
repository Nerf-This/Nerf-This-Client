'use strict';

var app = app || {};
var __API_URL__ = 'https://owjs.ovh';
let allPlayers = [];
let primaryHeroes = [];
let secondaryHeroes = [];
let primaryHeroHours = [];
let secondaryHeroHours = [];

(function(module) {


  //Player constructor function
  function Player(data) {
    this.profile = data.profile,
    this.quickplay = data.quickplay.global,
    this.heroes = data.quickplay.heroes,
    this.achievements = data.achievements
    this.totalHours = data.quickplay.global.time_played/3600000
  }

  //API call for primary player data
  Player.loadPlayer = function (platform, region, battletag) {
    console.log('Players battletag', battletag);
    $.get(`${__API_URL__}/all/${platform}/${region}/${battletag}`, function (data) {
      allPlayers[0] = new Player(data);
      primaryHeroes = Object.keys(allPlayers[0].heroes);
      primaryHeroHours = heroHours(0);
    })

      .then(() => {app.playerView.initPlayerPage(primaryHeroes, primaryHeroHours)})
      .then(() => {$('#searchload-player').fadeOut(500)});
  }
  //API call for a player to compare against
  Player.comparePlayer = function (platform, region, battletag) {
    console.log(battletag);
    $.get(`${__API_URL__}/all/${platform}/${region}/${battletag}`, function (data){
      allPlayers[1] = new Player(data);
      secondaryHeroes = Object.keys(allPlayers[1].heroes);
      primaryHeroHours = heroHours(1);
    })
      .then(() => {app.playerView.initComparePage(secondaryHeroes, secondaryHeroHours)})
      .then(() => {$('#searchload-opponent').fadeOut(500)});
  }
  //Getting battletag info from forms
  Player.getPlayer = function () {
    $('#primary-tag').on('submit', function(event) {
      event.preventDefault();
      $('#searchload-player').fadeIn(250);
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
      $('#searchload-opponent').fadeIn(250);
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

  //Getting an array of hours per hero
  function heroHours(player) {
    let time = [];
    for(var key in allPlayers[player].heroes){
      time.push(Math.ceil(allPlayers[player].heroes[key].time_played/3600000))
    }
    return time;
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
