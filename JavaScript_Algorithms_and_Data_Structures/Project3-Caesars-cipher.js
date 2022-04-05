function rot13(str) {
     // First divide the string into an array of characters to be able to modify them.
    // Then charCodeAt () and String.fromCharCode () allow to take the asci code of each character and evaluate if it is a letter and encrypt it, 
   // otherwise it leaves the character intact.
  // The operator module (%) with 26 allows to match a turn for characters that add up to more than 90 (the value of Z).
  return str.split("")
  .map(a => a.charCodeAt() >= 65 && a.charCodeAt() <= 90 ? 
  String.fromCharCode(((a.charCodeAt() + 13 - 65) % 26) + 65): a)
  .join("");
}

rot13("SERR PBQR PNZC");
