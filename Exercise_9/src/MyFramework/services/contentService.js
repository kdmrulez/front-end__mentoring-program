import api from '../api';
import setContent from '../content';

const contentService = {
  setContent: (rootElement, url) => {
    api.getContent(url)
      .then(data => setContent(rootElement, data));
  },

};

export default contentService;
