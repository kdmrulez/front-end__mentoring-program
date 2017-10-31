/* global window:true */
const historyService = {
  addToHistory: ((url) => {
    window.history.pushState({}, 'Route', url);
  }),
};

export default historyService;
