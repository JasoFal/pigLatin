# _Pig Latin_

#### By _**Jason Falk**_

#### _An application to translate a regular sentence into Pig Latin._

## Technologies Used

* _Javascript_
* _Git/Git Bash_
* _HTML_
* _Bootstrap_
* _CSS_

## Description

_A Fidgetech project created in order to demonstrate knowledge of looping.
How Pig Latin works._
1. For words beginning with a vowel, add "way" to the end. For Pig Latin, vowels are "a," "e," "i," "o," and "u." Don't treat "y" as a vowel. Examples: "away" becomes "awayway" and "okay" becomes "okayway."
2. For words beginning with one or more consonants, move all of the first consecutive consonants to the end and add "ay". Examples: "code" becomes "odecay" and "move" becomes "ovemay."

## Setup/Installation Requirements

1. _In Git Bash type git clone https://github.com/JasoFal/pigLatin.git_
2. _Either use Git Bash to reach the top level of the directory or open file explorer and find directory._
3. _Open index.html in the browser of your choice using one of the following methods._
-----
* _Use command start index.html if in Git Bash._
* _In file explorer click on index.html._

## Known Bugs

* _If you type a word with all consonants the program will duplicate the word._

## License

_MIT_

Copyright (c) _3/21/23_ _Jason Falk_

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
