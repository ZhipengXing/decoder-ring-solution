// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet) return false;
    if (alphabet.length != 26) return false;

    for (i = 0; i < 26; i++) {
      const char = alphabet[i];
      const replaced = alphabet.replace(char, "");
      if (replaced.includes(char)) return false;
    }
    const outputArray = [];
    const lowerInput = input.toLowerCase();
    if (!encode) {
      for (i = 0; i < lowerInput.length; i++) {
        const char = lowerInput[i];
        const splitInput = alphabet.split(char);
        const num = splitInput[0].length + 97;
        if (char === " ") {
          outputArray.push(char);
        } else  {
          outputArray.push(String.fromCharCode(num));
        }
      }
    } else {
      for (i = 0; i < lowerInput.length; i++) {
        const char = lowerInput[i];
        const num = char.charCodeAt() - 97;
        if (num < 0 || num > 25) {
          outputArray.push(char);
        } else {
          outputArray.push(alphabet[num]);
        }
      }
    }
    let output = outputArray.join("");
    return output;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
