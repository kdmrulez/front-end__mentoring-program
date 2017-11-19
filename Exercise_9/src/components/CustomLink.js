import componentsService from './services';

const customlinkComponent = {
  template: '<a></a>',
  beforeMount: (app, element, componentData) => {
    componentsService.setAttributes(element, componentData);
    const linkUrl = componentData.getNamedItem('href').value;
    element.addEventListener('click', (event) => {
      app.navigate(linkUrl);
      event.preventDefault();
    }, false);
  },
};

export default customlinkComponent;
