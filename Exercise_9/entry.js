import MyFramework from './src/MyFramework';
import customlinkComponent from './src/components/CustomLink';
import routes from './routes';

const wd = new MyFramework();
const APP_NAME = 'app';

/* global window:true */
window.onload = () => {
  wd.createRoot(APP_NAME)
    .routes(routes)
    .component('customlink', customlinkComponent);
};
