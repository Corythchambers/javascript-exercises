const palindromes = function (word) {
    // accept a string
    // if the word is empty or 1 character return true
    // remove all punctuation (regex?)
    // make lower caes
    // split the word into an array
    // create a counter for the second hafl indexes
    // iterate through the first half of the string
    //  compare first half to second half
    //  if not the same return false;
    // after loop return true;
    if (word.length <= 1) return true;
    let modifiedWord = word
        .toLowerCase()
        .split('')
        .filter((character) => /^[a-z0-9]$/i.test(character))
        .join('');

    return modifiedWord.split('').reverse().join('') === modifiedWord;
};

// Do not edit below this line
module.exports = palindromes;
