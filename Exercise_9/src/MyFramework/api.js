/* global fetch:true */

const api = {
  getContent: url => fetch(url).then(response => response.text()),
};

export default api;
