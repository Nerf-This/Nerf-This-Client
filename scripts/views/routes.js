'use strict';

if (window.location.pathname !== '/') {
  console.log('Running remote.  Setting base to /Nerf-This');
  page.base('/Nerf-This');
}

page('/', ctx => app.Player.fetchAll(app.playerView.initIndexPage));
page('/achievement-comparison', () => app.Player.fetchAll(app.playerView.initAchievementPage));
//page('/team-link', ctx => app.Player.fetchAll(app.playerView.initTeamPage));
page('/about', () => app.playerView.initAboutPage());
