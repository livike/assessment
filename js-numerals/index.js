const initApp = () => {
  // Initializes the app, registers the button click listener
  const newButton = document.querySelector('#btnConvertNumber');
  newButton.addEventListener('click', convertNumber);
};


const createElement = (type, original, text, className) => {
  // Creates a new HTML element and returns it
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  newElement.textContent = original + text;
  return newElement;
};

// const numberToEnglish = (num) => {

// }
const numberToEnglish= (n)=> {

  const string = n.toString();

  /* Is number zero? */
  if (parseInt(string) === 0) {
      return 'zero';
  }

  // units
  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  // tens
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  // Scales
  const scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion'];

  /* Split user arguemnt into 3 digit chunks from right to left */
  let start = string.length;
  let chunks = [];

  while (start > 0) {
      const end = start;
      chunks.push(string.slice((start = Math.max(0, start - 3)), end));
  }

  /* Check if the input number is too big */
  const chunksLen = chunks.length;
  
  if (chunksLen > scales.length) {
      return '';
  }

  /* Stringify each integer in each chunk */
  const words = [];
  let i, ints;
  for (i = 0; i < chunksLen; i++) {

      chunk = parseInt(chunks[i]);

      if (chunk) {
          /* Split chunk into array of individual integers */
          ints = chunks[i].split('').reverse().map(parseFloat);

          /* If tens integer is 1, i.e. 10, then add 10 to units integer */
          if (ints[1] === 1) {
              ints[0] += 10;
          }
          /* Add scale word if chunk is not zero and array item exists */
          if ((word = scales[i])) {
              words.push(word);
          }
          /* Add unit word if array item exists */
          if ((word = units[ints[0]])) {
              words.push(word);
          }
          /* Add tens word if array item exists */
          if ((word = tens[ints[1]])) {
              words.push(word);
          }

          /* Add hundreds word if array item exists */
          if ((word = units[ints[2]])) {
              words.push(word + ' hundred');
          }
      }
  }

  return words.reverse().join(' ');

}


const convertNumber = () => {
  
  // Fetching the user input
  const newNumberInput = document.querySelector('input#number');
  const newNumberInputStr = newNumberInput.value.toString() + ' ==> ';
  
  const numbersList = document.querySelector('.numbers-list');
  
  // converts the number to english
  const outputText = numberToEnglish(
    newNumberInput.value
  );

  // creates a new HTML element based on it
  const element = createElement('li',newNumberInputStr, outputText, 'number-item');

  // inserts the element to the DOM
  numbersList.insertBefore(element, numbersList.childNodes[0]);

  // clear input value
  newNumberInput.value = '';
};

// Start the application
initApp();