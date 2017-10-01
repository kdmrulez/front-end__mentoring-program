import api from './api/Api';

/* global window:true */
const routes = [{
  url: '/',
  templateUrl: api.getHome(),
},
{
  url: '/sign-in',
  templateUrl: api.getSignIn(),
},
];

window.onload = () => {
  api.getHome()
    .then((data) => { window.document.getElementById('content').innerHTML = data; });
};

window.document.querySelectorAll('.sign-in').forEach((button) => {
  button.addEventListener('click', () => {
    window.history.pushState({}, 'Sign in', routes[1].url);
    api.getSignIn()
      .then((data) => { window.document.getElementById('content').innerHTML = data; });
  }, false);
});

window.onpopstate = () => {
  routes.filter(route => route.url === window.location.pathname)[0].templateUrl
    .then((data) => { window.document.getElementById('content').innerHTML = data; });
};
