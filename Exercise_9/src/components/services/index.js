const componentsService = {
  setAttributes(element, attributesCollection) {
    for (let index = 0; index < attributesCollection.length; index += 1) {
      const attributeName = attributesCollection[index].name;
      const attributeValue = attributesCollection[index].value;
      element.setAttribute(attributeName, attributeValue);
    }
  },
};

export default componentsService;
