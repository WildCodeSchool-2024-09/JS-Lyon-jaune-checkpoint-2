/*
Créé une fonction countLetters qui compte, dans une string donnée, le nombre de fois qu'une lettre apparait.

Exemples :
* "" et "a" -> 0
* "a" et "a" -> 1
* "aaaaabbbaa" et "a" -> 7
* "bbacbaaa" et "c" -> 1
* "bbcc" et "a" -> 0
*/

function countLetters(givenString: string, letter: string): number {
  for (let index = 0; index < givenString.length; index++) {
    if (letter !== "") givenString[index];
  }

  if (letter === "a") {
    givenString[index];
    index += 1;
  } else if (letter === "c") {
    givenString[index];
    index -= 1;
  }
  return 0;
}

export default countLetters;
