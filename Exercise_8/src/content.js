/* global window:true */
const content = window.document.getElementById('content');

const setContent = (data) => {
  content.innerHTML = data;
};

export default setContent;
