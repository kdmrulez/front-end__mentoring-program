import api from './api';
import setContent from './content';

const contentService = {
  setHomeContent: () => {
    api.getHome()
      .then((data) => { setContent(data); });
  },
  setSignInContent: () => {
    api.getSignIn()
      .then((data) => { setContent(data); });
  },
};

export default contentService;
