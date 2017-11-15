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
    console.log('constructor triggered');
    this.profile = data.profile,
    this.quickplay = data.quickplay.global,
    this.heroes = data.quickplay.heroes,
    this.achievements = data.achievements
    this.totalHours = data.quickplay.global.time_played/3600000
  }

  //API call for primary player data
  Player.loadPlayer = function (platform, region, battletag) {
    console.log(battletag);
    $.get(`${__API_URL__}/all/${platform}/${region}/${battletag}`, function (data) {
      allPlayers[0] = new Player(data);
      primaryHeroes = Object.keys(allPlayers[0].heroes);
      primaryHeroHours = heroHours(primaryHeroes, allPlayers[0].heroes);
      console.log('inside api call');
    })
      .then(app.playerView.initPlayerPage);
  }
  //API call for a player to compare against
  Player.comparePlayer = function (platform, region, battletag) {
    console.log(battletag);
    $.get(`${__API_URL__}/all/${platform}/${region}/${battletag}`, function (data){
      allPlayers[1] = new Player(data);
      secondaryHeroes = Object.keys(allPlayers[1].heroes);
      console.log('Inside the compare player API call');
    })
      .then(app.playerView.initComparePage);
  }
  //Getting battletag info from forms
  Player.getPlayer = function () {
    $('#primary-tag').on('submit', function(event) {
      event.preventDefault();
      let platform = event.target.platform.value.toLowerCase();
      let region = event.target.region.value.toLowerCase();
      let battletag = event.target.battletag.value.split('#').join('-');
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
      console.log(platform, region, battletag);
      Player.comparePlayer(platform, region, battletag);
    })
  }

  //Trying to get an array of hours per hero, using the array of hero names
  // function heroHours(a, b) {
  //   console.log('heroHours triggered');
  //   var time = [];
  //   for ( var i = 0; i < a.length; i++ ) {
  //     time.push( b.a[i].time_played );
  //   }
  //   console.log(time);
  //   return time;
  // }

  function heroHours(array, heroes) {
    let time = [];
    for (let i = 0; i < array.length; i++) {
      if (heroes.hasOwnProperty(array[i])) {
        heroes.array[i].time_played.push(time);
      } else {
        console.log('hit the else, something broke');
      }
    }
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
