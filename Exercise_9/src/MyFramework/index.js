/* global window:true */
import App from './app';

function MyFramework() {
  const appInstances = new Map();
  this.createRoot = (appName) => {
    const appRootElement = window.document.querySelector(`main[wd-root=${appName}]`);
    const appInstance = new App(appRootElement);
    appInstances.set(appName, appInstance);
    return appInstance;
  };

  this.root = appName => appInstances.get(appName);
}

export default MyFramework;
