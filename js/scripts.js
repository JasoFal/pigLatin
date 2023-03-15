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

function pigLatin(text) {
  let pigText = text.split(" ");
  let pigLatinArray = [];
  for (let i = 0; i <= pigText.length - 1; i++) {
    pigLatinArray.push(pigWord(pigText[i]));
  };
  return pigLatinArray.join(" ")
}

pigLatin("apple");
//UI Logic