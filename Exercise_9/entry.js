import MyFramework from './src/MyFramework';
import routes from './routes';

const wd = new MyFramework();
const APP_NAME = 'app';
/* global window:true */
window.onload = () => {
  wd.createRoot(APP_NAME)
    .routes(routes);
};

window.document.querySelectorAll('.sign-in').forEach((button) => {
  button.addEventListener('click', () => {
    wd.root(APP_NAME).navigate('/sign-in.html');
  }, false);
});

window.onpopstate = () => {
  const currentUrl = window.location.pathname;
  if (currentUrl === '/') {
    wd.root(APP_NAME).navigate(currentUrl);
  }
};
