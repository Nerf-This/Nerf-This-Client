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
  // let { avatar, level, nick, url} = data.profile;
  // let { ana, bastion, dva, hanzo, junkrat, lucio, mccree} = data.quickplay.heroes;

}

//Create a player
let loadUser = function () {
  $.get(`${__API_URL__}/all/pc/us/CheshireKat-1372`, function (data) {
    new Player(data);
  });
}

loadUser();

//LOCAL STORAGE
if(localStorage) {
  //store playerSearch
  let playerSearch = localStorage.playerSearch;
  let compareSeatch = localStorage.compareSearch;
  //populate search bar with playerSearch
  $('PLAYER SEARCH INPUT TEXT').val(playerSearch);

  //CALL function to populate player data and Compare data
  // TODO: ADD function calls for Player Data and Compare Data

} else {

  //declare search strings
  let playerSearch = "";
  let compareSearch = "";
  
}
