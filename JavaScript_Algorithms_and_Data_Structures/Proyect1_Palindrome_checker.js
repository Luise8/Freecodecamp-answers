function palindrome(str) {

  // First check. Check if  this characters are more than two
  // (This is the minimum required to form a palindrome) 
  if (str.length < 3) {
    return false;

  } else {

    // Search and remove all non-alphanumeric characters
    let searchalpha = /([^a-z0-9])+/ig;
    let copy = str.replace(searchalpha, "");

    // Convert to lowercase all letters
    copy = copy.toLowerCase();

    // Check if this letters are more than two 
    // (This is the minimum required to form a palindrome)
    if (copy.length < 3) {
      return false;

    } else {
      // Constants to find and store all alphanumeric 
      // characters in an array called COPYARRAY
      const SEARCHALLLETTERS = /[a-z0-9]+/;
      const COPYARRAY = copy.match(SEARCHALLLETTERS);

      // Iterate over all the characters in COPYARRAY and check every turn 
      // if the i character and the length - (i + 1) character are different 
      // (these are the parallel characters for the beginning and the end.),  
      // in this case it returns false. 
      // Otherwise, it returns true because it found no differences, 
      // that is, they are totally equal and, therefore, they are a palindrome.
      for (let i = 0; i < copy.length; i++) 
      {
        if (COPYARRAY[0][i] != COPYARRAY[0][copy.length - (i + 1)]) {
          return false;
        }
      }
      return true;
    }
  }
}

palindrome("eye");
