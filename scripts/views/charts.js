'use strict';

//Drawing a chart for a single user's stats
function drawSingleChart(labels, values) {
  var ctx = document.getElementById('primaryChart').getContext('2d');
  new Chart(ctx,{
    type: 'horizontalBar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Hours Played',
          data: values,
          backgroundColor: [
            'rgb(255,18,0)',
            'rgb(232,62,0)',
            'rgb(255,117,0)',
            'rgb(232,146,0)',
            'rgb(255,195,0)',
            'rgb(255,205,0)',
            'rgb(232,218,0)',
            'rgb(192,255,0)',
            'rgb(68,232,0)',
            'rgb(0,255,35)',
            'rgb(0,255,112)',
            'rgb(0,232,189)',
            'rgb(0,210,255)',
            'rgb(0,111,232)',
            'rgb(0,33,255)',
            'rgb(0,80,255)',
            'rgb(131,0,232)',
            'rgb(206,0,255)',
            'rgb(232,0,195)',
            'rgb(255,0,83)'
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
      responsive: false,
      animation: {
        duration: 1000,
        easing: 'easeOutBounce'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 300,
          min: 0,
          stepSize: 1.0
        }
      }]
    }
  });
}

//Drawing the comparison charts
function drawCompareChart(labels, primaryValues, secondaryValues) {
  var ctx = document.getElementById('compareChart').getContext('2d');
  new Chart(ctx,{
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
            'rgb(192,255,0)',
            'rgb(68,232,0)',
            'rgb(0,255,35)',
            'rgb(0,255,112)',
            'rgb(0,232,189)',
            'rgb(0,210,255)',
            'rgb(0,111,232)',
            'rgb(0,33,255)',
            'rgb(0,80,255)',
            'rgb(131,0,232)',
            'rgb(206,0,255)',
            'rgb(232,0,195)',
            'rgb(255,0,83)'
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
            'rgb(252, 128, 118)',
            'rgb(249, 154, 119)',
            'rgb(252, 182, 123)',
            'rgb(252, 208, 133)',
            'rgb(252, 224, 133)',
            'rgb(252, 230, 138)',
            'rgb(252, 245, 133)',
            'rgb(223, 252, 133)',
            'rgb(173, 252, 141)',
            'rgb(138, 252, 154)',
            'rgb(147, 249, 192)',
            'rgb(143, 252, 232)',
            'rgb(146, 233, 252)',
            'rgb(146, 197, 252)',
            'rgb(147, 160, 249)',
            'rgb(151, 183, 252)',
            'rgb(207, 152, 249)',
            'rgb(235, 164, 252)',
            'rgb(249, 167, 236)',
            'rgb(249, 177, 201)'
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
      }]
    }
  });
}
