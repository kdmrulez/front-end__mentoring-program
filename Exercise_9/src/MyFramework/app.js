import api from './api';
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
    const absoluteUrl = `${window.location.origin}${relativeUrl}`;
    const templateUrl = this.appRoutes[relativeUrl];

    historyService.addToHistory(absoluteUrl);
    api.getContent(templateUrl)
      .then((content) => {
        this.rootElement.innerHTML = content;
      });
  }
}

export default App;
