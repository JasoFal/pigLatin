//Utility Logic

//Business Logic
function pigLatin(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let textArray = text.split(" ");
  let = wordArray = [];
  for (let i = 0; i < textArray.length; i++) {
    let splitWord = textArray[i].split("");
    let alteredArray = [];
    if (splitWord[0].includes("a") || splitWord[0].includes("e") || splitWord[0].includes("i") || splitWord[0].includes("o") || splitWord[0].includes("u")) {
      alteredArray.push("way");
    } else {
      alteredArray.push("ay");
    }
    alteredArray.unshift(splitWord.join(""));
    wordArray.push(alteredArray.join(""));
    return wordArray.join(" ");
  }
}
//UI Logic