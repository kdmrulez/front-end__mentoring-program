import api from './api';
import historyService from './services/historyService';
import parsingService from './services/parsingService';
/* global window:true */
class App {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.appRoutes = {};
  }

  routes(routes) {
    this.appRoutes = routes;
    this.navigate(Object.keys(this.appRoutes)[0]);
    return this;
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

  component(name, descriptor) {
    const customElements = window.document.getElementsByTagName(name);
    const elementToInsert = parsingService.createTagFromString(descriptor.template);

    for (let index = 0; index < customElements.length; index += 1) {
      const customElement = customElements.item(index);

      elementToInsert.innerHTML = customElement.innerHTML;
      descriptor.beforeMount(this, elementToInsert, customElement.attributes);
      customElement.parentNode.replaceChild(elementToInsert, customElement);
    }

    return this;
  }
}

export default App;
