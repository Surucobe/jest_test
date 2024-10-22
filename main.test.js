const testFunctions = require('./main')

const example = {
  "average": 4,
  "min": 1,
  "max": 8,
  "length": 6
}

test('Capitalize', () => {
  expect(testFunctions.capitalize('hola')).toBe('Hola');
})

test('Reverse String', () => {
  expect(testFunctions.reverseString('hola')).toBe('aloh');
})

test('Calculator', () =>{
  expect(testFunctions.calculator.addition(2,5)).toBe(7)
  expect(testFunctions.calculator.substract(6,5)).toBe(1)
  expect(testFunctions.calculator.multiplication(2,5)).toBe(10)
  expect(testFunctions.calculator.division(5,5)).toBe(1)
})

test('Analyze Array', () => {
  expect(testFunctions.analyzeArray([1,8,3,4,2,6])).toMatchObject(example)
})

test('Caesar Cipher', () =>{
  expect(testFunctions.caesarCipher('xyz', 3)).toBe('abc')
})