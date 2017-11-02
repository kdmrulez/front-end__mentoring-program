const customlink = {
  template: '<a></a>',
  beforeMount: (app, element, componentData) => {
    for (let index = 0; index < componentData.length; index += 1) {
      const attributeName = componentData[index].name;
      const attributeValue = componentData[index].value;

      if (attributeName === 'href') {
        element.addEventListener('click', () => {
          app.navigate(attributeValue.substring(1));
        }, false);
      } else {
        element.setAttribute(attributeName, attributeValue);
      }
    }
  },
};

export default customlink;
