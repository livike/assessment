const { validateEmpty, numberToEnglish } = require('./util');

test('return false if empty', ()=>{
  expect(validateEmpty('')).toBe(false);
})

test('return true if not empty', ()=>{
  expect(validateEmpty('123')).toBe(true);
})

test('should convert numbert to english without the and word', () => {
  expect(numberToEnglish(12)).toBe('twelve');
  expect(numberToEnglish(98)).toBe('ninety eight');
});

test('should convert numbert to english with the and word', () => {
  expect(numberToEnglish(2012)).toBe('two thousand and twelve');
  expect(numberToEnglish(1999)).toBe('one thousand nine hundred and ninety nine');
  expect(numberToEnglish(23899)).toBe('twenty three thousand eight hundred and ninety nine');
});

