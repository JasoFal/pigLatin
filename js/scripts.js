//Utility Logic
function findFirstVowel(word) {
  const vowelArray = ["a", "e", "i", "o", "u"];
  for (let i = 0; i <= word.length -1; i++) {
    if (vowelArray.indexOf(word[i]) !== -1) {
      console.log(i);
      return i;
    }
  }
}
//Business Logic
function pigWord(word) {
  if (findFirstVowel(word) === 0) {
    return word + 'way';
  } else {
    
  }
}

// function pigLatin(text) {
//   if (text.trim().length === 0) {
//     return 0;
//   }
//   let vowel = findFirstVowel(); 
//   piggedArray = [];
//   let textArray = text.split(" ");
//   if (vowel === 0) {
//     piggedArray.push(text + "way");
//   }
  
// }
pigWord("apple");
//UI Logic