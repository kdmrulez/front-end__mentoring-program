import contentService from './src/services/contentService';
import historyService from './src/services/historyService';

/* global window:true */
window.onload = () => {
  contentService.setHomeContent();
};

window.document.querySelectorAll('.sign-in').forEach((button) => {
  button.addEventListener('click', () => {
    historyService.addToHistory('/sign-in');
    contentService.setSignInContent();
  }, false);
});

window.onpopstate = () => {
  const singInUrl = '/sign-in';
  const currentUrl = window.location.pathname;
  if (currentUrl !== singInUrl) {
    contentService.setHomeContent();
  } else {
    contentService.setSignInContent();
  }
};
