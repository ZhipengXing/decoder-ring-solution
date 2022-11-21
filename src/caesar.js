// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

function caesar(input, shift, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25) return false;
    if (!encode) shift = shift * -1;
    const outputArray = [];
    const lowerInput = input.toLowerCase();
    for (i = 0; i < input.length; i++) {
      const char = lowerInput[i];
      const num = char.charCodeAt();
      const shiftedNum = num + shift;
      if (num < 97 || num > 122) {
        outputArray.push(char);
      } else if (shiftedNum > 122) {
        outputArray.push(String.fromCharCode(shiftedNum - 26));
      } else if (shiftedNum < 97) {
        outputArray.push(String.fromCharCode(shiftedNum + 26));
      } else {
        outputArray.push(String.fromCharCode(shiftedNum));
      }
    }
    let output = outputArray.join("");
    return output;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
