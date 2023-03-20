//Utility Logic
function findFirstVowel(word) {
  const vowelArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let i = 0; i <= word.length - 1; i++) {
    if (vowelArray.indexOf(word[i]) !== -1) {
      return i;
    }
  }
}
//Business Logic
function pigWordMutator(word) {
  if (findFirstVowel(word) === 0) {
    return word + 'way';
  } else {
    return word.slice(findFirstVowel(word), word.length) + word.slice( -word.length, findFirstVowel(word)) + "ay";
  }
}

function pigLatin(text) {
  if (text.trim().length === 0) {
    return null;
  }
  let pigText = text.split(" ");
  let pigLatinArray = [];
  for (let i = 0; i <= pigText.length - 1; i++) {
    pigLatinArray.push(pigWordMutator(pigText[i]));
  };
  return pigLatinArray.join(" ");
}

console.log(pigLatin("James screams At the tomato"));
//UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  const prePigText = document.getElementById("text-passage").value;
  const pigGenerator = pigLatin(prePigText);
  document.querySelector("p#pigged-results").innerText = pigGenerator;
}

window.addEventListener("load", function () {
  this.document.querySelector("form#user-input").addEventListener("submit", handleFormSubmission);
});