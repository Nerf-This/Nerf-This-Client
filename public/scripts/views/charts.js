'use strict';

//Drawing a chart for a single user's stats
function drawSingleChart(labels, values) { // eslint-disable-line
  Chart.defaults.global.defaultFontColor = 'white'; // eslint-disable-line
  var ctx = document.getElementById('primaryChart').getContext('2d');
  new Chart(ctx,{ // eslint-disable-line
    type: 'horizontalBar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Your Performance',
          data: values,
          backgroundColor: [
            'rgb(255,18,0)',
            'rgb(232,62,0)',
            'rgb(255,117,0)',
            'rgb(232,146,0)',
            'rgb(255,195,0)',
            'rgb(255,205,0)',
            'rgb(232,218,0)',
            'rgb(255,255,20)',
            'rgb(192,255,0)',
            'rgb(68,232,0)',
            'rgb(0,255,35)',
            'rgb(0,255,112)',
            'rgb(40,255,183)',
            'rgb(0,232,189)',
            'rgb(7,239,228)',
            'rgb(20,227,255)',
            'rgb(0,210,255)',
            'rgb(0,111,232)',
            'rgb(0,80,255)',
            'rgb(0,33,255)',
            'rgb(86,20,255)',
            'rgb(131,0,232)',
            'rgb(206,0,255)',
            'rgb(232,0,195)',
            'rgb(255,0,83)',
            'rgb(198,0,29)'
          ],

          hoverBackgroundColor: [
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon'
          ]
        }]
    },
    options: {
      responsive: true,
      animation: {
        duration: 1000,
        easing: 'easeOutBounce'
      },
      legend: {
        fontColor: 'white',
        labels: {
          fontColor: 'white'
        }
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 30000,
          min: 0,
          stepSize: 0.5,
        }
      }]
    }
  });
}

//Drawing the comparison charts
function drawCompareChart(labels, primaryValues, secondaryValues) { // eslint-disable-line
  Chart.defaults.global.defaultFontColor = 'white'; // eslint-disable-line
  var ctx = document.getElementById('compareChart').getContext('2d');
  new Chart(ctx,{ // eslint-disable-line
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'You',
          data: primaryValues,
          backgroundColor: [
            'rgb(255,18,0)',
            'rgb(232,62,0)',
            'rgb(255,117,0)',
            'rgb(232,146,0)',
            'rgb(255,195,0)',
            'rgb(255,205,0)',
            'rgb(232,218,0)',
            'rgb(255,255,20)',
            'rgb(192,255,0)',
            'rgb(68,232,0)',
            'rgb(0,255,35)',
            'rgb(0,255,112)',
            'rgb(40,255,183)',
            'rgb(0,232,189)',
            'rgb(7,239,228)',
            'rgb(20,227,255)',
            'rgb(0,210,255)',
            'rgb(0,111,232)',
            'rgb(0,80,255)',
            'rgb(0,33,255)',
            'rgb(86,20,255)',
            'rgb(131,0,232)',
            'rgb(206,0,255)',
            'rgb(232,0,195)',
            'rgb(255,0,83)',
            'rgb(198,0,29)'
          ],

          hoverBackgroundColor: [
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon'
          ]
        },
        {
          label: 'Them',
          data: secondaryValues,
          backgroundColor: [
            'rgb(249, 168, 162)',
            'rgb(249, 183, 159)',
            'rgb(252, 204, 164)',
            'rgb(252, 215, 153)',
            'rgb(252, 231, 164)',
            'rgb(249, 233, 164)',
            'rgb(249, 245, 172)',
            'rgb(252, 252, 169)',
            'rgb(228, 249, 162)',
            'rgb(195, 252, 171)',
            'rgb(162, 249, 174)',
            'rgb(153, 252, 197)',
            'rgb(151, 252, 218)',
            'rgb(152, 249, 231)',
            'rgb(161, 252, 248)',
            'rgb(155, 243, 255)',
            'rgb(153, 235, 252)',
            'rgb(156, 202, 252)',
            'rgb(172, 196, 249)',
            'rgb(184, 193, 252)',
            'rgb(199, 179, 252)',
            'rgb(222, 184, 252)',
            'rgb(241, 183, 255)',
            'rgb(252, 186, 241)',
            'rgb(252, 184, 206)',
            'rgb(244, 149, 163)'
          ],

          hoverBackgroundColor: [
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon',
            'lemonchiffon'
          ]
        }]
    },
    options: {
      responsive: true,
      animation: {
        duration: 1000,
        easing: 'easeOutBounce'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 30000,
          min: 0,
          stepSize: 0.5
        }
      }],
    }
  });
}

//Destroying the chart every time it needs to be redrawn
function destroyChart () { // eslint-disable-line
  $('#compareChart').remove();
  $('.compare-view').append('<canvas id="compareChart"></canvas>');
  let canvas = document.querySelector('#compareChart');
  let ctx = canvas.getContext('2d');
  ctx.canvas.width = $('#graph').width();
  ctx.canvas.height = $('#graph').height();
}

function destroySolo () {
  $('#primaryChart').remove();
  $('.player-view').append('<canvas id="primaryChart"></canvas');
  let canvas = document.querySelector('#primaryChart');
  let ctx = canvas.getContext('2d');
  ctx.canvas.width = $('#graph').width();
  ctx.canvas.height = $('#graph').height();
}
