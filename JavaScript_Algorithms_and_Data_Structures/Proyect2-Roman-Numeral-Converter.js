function convertToRoman(num) {

  // Set an object with the key value for the Roman simbols.
  const romanNumber = {
    "1": "I",
    "5": "V",
    "10": "X",
    "50": "L",
    "100": "C",
    "500": "D",
    "1000": "M"
  }
  // Check if whole number corresponds to a symbol of Roman numerals
  if (romanNumber[num]) {
    return romanNumber[num];
  }

  // Otherwise, the following code is executed, 
  // since you have to make combinations to achieve the conversion.

  // First establish an array that will have the numbers to which the symbols correspond, 
  // this will facilitate iterating over them.
  const indexRomanNumbers = [ 1, 5, 10, 50, 100, 500, 1000 ];

  // Create an inverted array of with each number as an element. This to go from 0 over 
  // the unit, then the ten, then the hundred and so on. 
  // Replace all 0s with "Zero", this will avoid problems with making the replacements.
  let numResutl = num.toString().split("").reverse().map(a => {if (a == 0) { return "Zero"} else { return a}});

  // Iterates over the numResutl array and increases the value of i by 1. 
  // In addition, it increases the value of basisRoman by 2 in each turn, 
  // this allows increasing units in each turn according to the Decimal numbering system, when it is how indexRomanNumbers[basisRoman]
  for (let i = 0, basisRoman = 0; i < num.toString().length; i++, basisRoman+= 2) {

    // Check if the current number corresponds to a ronao symbol, if so, replace it with the symbol.
    if (romanNumber[numResutl[i] * indexRomanNumbers[basisRoman]]) {
      numResutl[i] = romanNumber[numResutl[i] * indexRomanNumbers[basisRoman]];

    // // Otherwise, it iterates over the three elements starting from the current indexRomanNumbers [basisRoman].  
    } else {
      for (let j = basisRoman; j <= (basisRoman + 2); j++) {

        // If the current element corresponds to some symbol - indexRomanNumbers [basisRoman], 
        // then it returns the symbol of the base plus that symbol.
        if ((numResutl[i] * indexRomanNumbers[basisRoman]) == indexRomanNumbers[j] - indexRomanNumbers[basisRoman]) {
          numResutl[i] = romanNumber[indexRomanNumbers[basisRoman]] + romanNumber[indexRomanNumbers[j]];

        // If it corresponds to some symbol (romanNumber[indexRomanNumbers[j]]) plus indexRomanNumbers [basisRoman] or more 
        // indexRomanNumbers [basisRoman] * 2, 
        // then the symbol plus the symbol of indexRomanNumbers [basisRoman] as many times as the difference.
        } else if ((numResutl[i] * indexRomanNumbers[basisRoman]) == indexRomanNumbers[j] + (indexRomanNumbers[basisRoman] * 2) || (numResutl[i] * indexRomanNumbers[basisRoman]) == indexRomanNumbers[j] + indexRomanNumbers[basisRoman]) {
          const diference = ((numResutl[i] * indexRomanNumbers[basisRoman]) - indexRomanNumbers[j]) / indexRomanNumbers[basisRoman];
          numResutl[i] = romanNumber[indexRomanNumbers[j]];
          for (let k = 0; k < diference; k++) {
            numResutl[i]+= romanNumber[indexRomanNumbers[basisRoman]]
          }
        // and if the current element corresponds to a symbol that is not an indexRomanNumbers [basisRoman], (ie: 5, 50, 500), 
        // plus three times the number of the indexRomanNumbers [basisRoman], 
        // then replace it like that, for example, VIII for 8.
        } else if ((numResutl[i] * indexRomanNumbers[basisRoman]) == indexRomanNumbers[j] + (indexRomanNumbers[basisRoman] * 3) && j % 2 == 1) {
          numResutl[i] = romanNumber[indexRomanNumbers[j]] + romanNumber[indexRomanNumbers[basisRoman]] + romanNumber[indexRomanNumbers[basisRoman]] + romanNumber[indexRomanNumbers[basisRoman]];
        } 

      } 
      // End of second loop

    } 
    // End of big else

  } 
  // End of big fisrt loop

  // Revert the numResutl, remove the "Zero" and join it all in a string.
  numResutl = numResutl.reverse().filter(a => a != "Zero").join("")

  // Finally return the Roman number corresponding to the input.
  return numResutl;
}

convertToRoman(3999);
