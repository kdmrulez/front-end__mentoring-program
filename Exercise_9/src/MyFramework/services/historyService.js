/* global window:true */
const historyService = {
  addToHistory: ((url) => {
    window.history.pushState({}, 'Route', url);
  }),
  createHistoryNavigation: (appInstance) => {
    window.onpopstate = () => {
      const currentUrl = window.location.pathname;
      if (currentUrl === '/') {
        appInstance.navigate(currentUrl);
      }
    };
  },
};

export default historyService;
