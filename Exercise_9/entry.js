import MyFramework from './src/MyFramework';

const BASIC_URL = 'http://localhost:8080';
const TEMPLATES_URL = 'http://localhost:8080/templates';
const WD = new MyFramework();
const APP_NAME = 'app';
/* global window:true */
window.onload = () => {
  WD.createRoot(APP_NAME)
    .routes([
      { url: `${BASIC_URL}`, templateUrl: `${TEMPLATES_URL}/home.html` },
      { url: `${BASIC_URL}/sign-in.html`, templateUrl: `${TEMPLATES_URL}/sign-in.html` }]);

  WD.root(APP_NAME).navigate(`${BASIC_URL}`);
};

window.document.querySelectorAll('.sign-in').forEach((button) => {
  button.addEventListener('click', () => {
    WD.root(APP_NAME).navigate(`${BASIC_URL}/sign-in.html`);
  }, false);
});

window.onpopstate = () => {
  const currentUrl = window.location.origin;
  WD.root(APP_NAME).navigate(currentUrl);
};
