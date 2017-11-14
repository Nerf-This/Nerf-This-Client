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
    allPlayers.push(this);
  }

  //API call for player data
  Player.loadPlayer = function (platform, region, battletag) {
    console.log(battletag);
    $.get(`${__API_URL__}/all/${platform}/${region}/${battletag}`, function (data) {
      new Player(data);
      console.log('inside api call');
    });
  }

  Player.getPlayer = function () {
    $('#battletag').on('submit', function(event) {
      event.preventDefault();
      let platform = event.target.platform.value.toLowerCase();
      let region = event.target.region.value.toLowerCase();
      let battletag = event.target.battletag.value.split('#').join('-');
      console.log(battletag, region, platform);
      Player.loadPlayer(platform, region, battletag);
    })
  }

  // Templating with Handlebars
  Player.prototype.toHtml = function(type) {
    let template = Handlebars.compile($(`#${type}-view-template`).text());

    return template(this);
  };


  Player.getPlayer();

  module.Player = Player;
})(app)
