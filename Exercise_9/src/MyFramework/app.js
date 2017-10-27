import contentService from './services/contentService';
import historyService from './services/historyService';

/* global window:true */
class App {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.appRoutes = {};
  }

  routes(routes) {
    this.appRoutes = routes;
    this.navigate(Object.keys(this.appRoutes)[0]);
  }

  navigate(relativeUrl) {
    let absoluteUrl;
    if (relativeUrl !== '/') {
      absoluteUrl = `${window.location.origin}${relativeUrl}`;
    } else {
      absoluteUrl = window.location.origin;
    }
    const templateUrl = this.appRoutes[relativeUrl];
    historyService.addToHistory(absoluteUrl);
    contentService.setContent(this.rootElement, templateUrl);
  }
}

export default App;
