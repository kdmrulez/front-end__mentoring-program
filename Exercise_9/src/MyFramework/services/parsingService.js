const parser = new window.DOMParser();
/* global window:true */

export default {
  createTagFromString: (stringToParse) => {
    const htmlTag = parser.parseFromString(stringToParse, 'text/html').body.childNodes[0];
    return htmlTag;
  },
};
