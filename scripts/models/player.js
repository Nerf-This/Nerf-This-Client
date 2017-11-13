'use strict';

// var app = app || {};

var __API_URL__ = 'https://owjs.ovh'

let user = [];

let loadUser = function (ctx) {
  $.ajax({
    url: `${__API_URL__}/all/pc/us/CheshireKat-1372`,
    method: 'GET'
  })
    .then(results => user = results[0])
  err => console.error(err.status, err.statusText);
}

loadUser();
// let user = [];

// let test = function () {
// $.get(`${__API_URL__}/all/pc/us/CheshireKat-1372`, function (data, status) {
//   console.log(data, status);
// });
// }

// test();
