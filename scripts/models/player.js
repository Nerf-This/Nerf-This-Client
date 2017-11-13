'use strict';

// var app = app || {};

var __API_URL__ = 'https://owjs.ovh'

let players = [];

//Player constructor function
function Player(data) {
  console.log('constructor triggered');
  this.profile = data.profile,
  this.quickplay = data.quickplay.global,
  this.heroes = data.quickplay.heroes,
  this.achievements = data.achievements
  players.push(this);
}

//Create a player
let loadUser = function () {
  $.get(`${__API_URL__}/all/pc/us/CheshireKat-1372`, function (data) {
    new Player(data);
  });
}

loadUser();
