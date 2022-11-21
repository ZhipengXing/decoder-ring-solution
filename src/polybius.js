// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const lowerInput = input.toLowerCase();
    const square = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "(i/j)", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z"],
    ];

    const outputArray = [];
    if (!encode) {
      const inputCheck = lowerInput.split(" ");
      for (i = 0; i < inputCheck.length; i++) {
        if (inputCheck[i].length % 2 != 0) return false;
      }
      for (i = 0; i < lowerInput.length - 1; i += 2) {
        const column = lowerInput[i];
        const row = lowerInput[i + 1];
        if (column == " ") {
          outputArray.push(" ");
          i--;
        } else {
          const letter = square[row - 1][column - 1];
          outputArray.push(letter);
        }
      }
    } else {
      for (i = 0; i < lowerInput.length; i++) {
        const char = lowerInput[i];
        if (char === " ") {
          outputArray.push(" ");
        } else {
          for (j = 0; j < square.length; j++) {
            const row = square[j];
            const columnIndex = row.findIndex((item) => {
              if (item === char || item.includes(char)) return true;
            });
            if (columnIndex >= 0) {
              number = [columnIndex + 1, j + 1];
              outputArray.push(number[0]);
              outputArray.push(number[1]);
              break;
            }
          }
        }
      }
    }
    const output = outputArray.join("");
    return output;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
