import Choices from 'choices.js';

const multiDefault = () => {
  const elements = document.querySelectorAll('.multi-default');
  elements.forEach(el => {
    const choices = new Choices(el, {
      searchEnabled: false
    });
  });

}

multiDefault();
