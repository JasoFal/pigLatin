Describe: pigLatin()

Test: "It will return null if text is empty."
Code: pigLatin("");
Expected Output: 0

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "It will add ay to the end if word contains consonants."
Code: pigLatin("b")
Expected Output: "bay";

Test: "It will shift a single consonant to the end of the word."
Code: pigLatin("code");
Expected Output: "odecay";

Test: "It will shift two consonants to the end of the word."
Code: pigLatin("shift");
Expected Output: "iftshay"

Test: "It will shift three consonants to the end of the word."
Code: pigLatin("scream");
Expected Output: "eamscray"

Test: "It recognizes if a word has "qu" and shifts both to the end and adds ay."
Code: pigLatin("quick");
Expected Output: "ickquay"

Test: "It will function even if there are multiple words."
Code: pigLatin("b code shift");
Expected Output: "bay odecay iftshay"

Test: "It will function regardless of case."
Code: pigLatin("CODE Shift");
Expected Output: "odecay iftshay"


