import MyFramework from './src/MyFramework';
import customlinkObject from './src/MyFramework/customTags/CustomLink';
import routes from './routes';

const wd = new MyFramework();
const APP_NAME = 'app';
const CUSTOM_LINK = 'customlink';

/* global window:true */
window.onload = () => {
  wd.createRoot(APP_NAME)
    .routes(routes)
    .component(CUSTOM_LINK, customlinkObject);

  window.onpopstate = () => {
    const currentUrl = window.location.pathname;
    if (currentUrl === '/') {
      wd.root(APP_NAME).navigate(currentUrl);
    }
  };
};
