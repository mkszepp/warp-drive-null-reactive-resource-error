import EmberRouter from '@embroider/router';
import config from 'warp-drive-error/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
