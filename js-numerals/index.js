const { createElement, checkAndGenerate } = require('./util');

const initApp = () => {
  // Initializes the app, registers the button click listener
  const newButton = document.querySelector('#btnConvertNumber');
  newButton.addEventListener('click', convertNumber);
};

const convertNumber = () => {
  // Fetching the user input
  const newNumberInput = document.querySelector('input#number');
  
  const numbersList = document.querySelector('.numbers-list');
  
 const outputText = checkAndGenerate(newNumberInput.value);
 if (!outputText) {
   return;
 }

  // creates a new HTML element based on it
  const element = createElement('li', outputText, 'number-item');

  // inserts the element to the DOM
  numbersList.insertBefore(element, numbersList.childNodes[0]);

  // clear input value
  newNumberInput.value = '';
};

// Start the application
initApp();