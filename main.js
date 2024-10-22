function capitalize(string){
  return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string){
  return string.split('').reverse().join('');
}

const calculator = {
  addition(num1, num2){
    return num1 + num2;
  },
  substract(num1, num2){
    return num1 - num2
  },
  multiplication(num1, num2){
    return num1 * num2
  },
  division(num1, num2){
    return num1 / num2
  }
}

function caesarCipher(string, shifter){
  let charCodes = string.split('').map(letter => {
    let codeChar = letter.charCodeAt();

    if((codeChar >= 65 && codeChar <= 90)){
      codeChar = String.fromCharCode(((codeChar - 65 + shifter) % 26) + 65);
    }else if((codeChar >= 97 && codeChar <= 122)){
      codeChar = String.fromCharCode(((codeChar - 97 + shifter) % 26) + 97);
    }

    return codeChar;
  })

  return charCodes.join('')
}

function analyzeArray(array){
  return {
    average: array.reduce((acum, curr) => acum + curr) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length
  }
}

module.exports = {capitalize, reverseString, calculator, analyzeArray, caesarCipher}