function telephoneCheck(str) {
  // Basically in this regular expression two cases are searched: the first for all possibilities without parentheses, 
  // the second for all possibilities with parentheses only.
  return /^(1\s)?(\d{3}([-\s]\d{3}-|\s\d{3}\s)\d{4}$|\d{10}$)|^(1\s|1)?\(\d{3}\)\s?\d{3}-\d{4}$/.test(str);
}

telephoneCheck("1 555-555-5555");
