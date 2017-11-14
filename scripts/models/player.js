'use strict';

// var app = app || {};

var __API_URL__ = 'https://owjs.ovh'

let allPlayers = [];

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
Player.loadPlayer = function (battletag) {
  console.log(battletag);
  $.get(`${__API_URL__}/all/pc/us/${battletag}`, function (data) {
    new Player(data);
    console.log('inside api call');
  });
}

Player.getPlayer = function () {
  // $('#battletag').off('submit');
  $('#battletag').on('submit', function(event) {
    event.preventDefault();
    let battletag = event.target.battletag.value.split('#').join('-');
    console.log(battletag);
    Player.loadPlayer(battletag);
  })
}

Player.getPlayer();
