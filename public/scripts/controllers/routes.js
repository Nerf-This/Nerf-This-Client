'use strict';

// if (window.location.pathname !== '/') {
//   page.base('/Nerf-This');
// }

page('/', app.playerView.initIndexPage);
page('/compare', app.playerView.initOpponentPage);
page('/about', app.playerView.initAboutPage);
page('/profile', app.playerView.initProfilePage);
page();
