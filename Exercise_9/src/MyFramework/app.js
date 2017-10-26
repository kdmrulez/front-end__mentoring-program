import contentService from './services/contentService';
import historyService from './services/historyService';

function App(rootElement) {
  let appRoutes = [];
  let urlToSet = '';

  function findByUrl(route) {
    return route.url === urlToSet;
  }

  this.routes = (routes) => { appRoutes = routes; };

  this.navigate = (url) => {
    urlToSet = url;
    const route = appRoutes.find(findByUrl);
    historyService.addToHistory(route.url);
    contentService.setContent(rootElement, route.templateUrl);
  };
}

export default App;
