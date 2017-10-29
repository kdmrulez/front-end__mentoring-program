/* global window:true */
import App from './app';

class MyFramework {
  constructor() {
    this.appInstances = new Map();
  }

  createRoot(appName) {
    const appRootElement = window.document.querySelector(`[wd-root=${appName}]`);
    const appInstance = new App(appRootElement);
    this.appInstances.set(appName, appInstance);
    return appInstance;
  }

  root(appName) {
    return this.appInstances.get(appName);
  }
}

export default MyFramework;
