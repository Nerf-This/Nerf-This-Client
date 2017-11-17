'use strict';

if (window.location.pathname !== '/') {
  console.log('Running remote.  Setting base to /Nerf-This');
  page.base('/Nerf-This');
}

page('/', app.playerView.initIndexPage);
page('/compare', app.playerView.initOpponentPage);
page('/team-link', app.playerView.initTeamPage);
page('/about', app.playerView.initAboutPage);
page('/profile', app.playerView.initProfilePage);
page();
