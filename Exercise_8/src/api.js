/* global fetch:true */
const templatesURL = 'http://localhost:8080/templates';

const api = {
  getHome: () => fetch(`${templatesURL}/home.html`)
    .then(response => response.text()),

  getSignIn: () => fetch(`${templatesURL}/sign-in.html`)
    .then(response => response.text()),
};

export default api;
