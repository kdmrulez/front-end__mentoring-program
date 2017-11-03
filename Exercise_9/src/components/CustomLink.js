import componentsService from './services';

const customlinkComponent = {
  template: '<a></a>',
  beforeMount: (app, element, componentData) => {
    componentsService.setAttributes(element, componentData);
    const linkUrl = componentData.getNamedItem('href').value;
    element.removeAttribute('href');
    element.addEventListener('click', () => {
      app.navigate(linkUrl);
    }, false);
  },
};

export default customlinkComponent;
