/* global window:true */
import App from './app';
import historyService from './services/historyService';

const appInstances = Symbol('appInstances');

class MyFramework {
  constructor() {
    this[appInstances] = new Map();
  }

  createRoot(appName) {
    const appRootElement = window.document.querySelector(`[wd-root=${appName}]`);
    const appInstance = new App(appRootElement);
    historyService.createHistoryNavigation(appInstance);
    this[appInstances].set(appName, appInstance);
    return appInstance;
  }

  root(appName) {
    return this[appInstances].get(appName);
  }
}

export default MyFramework;
