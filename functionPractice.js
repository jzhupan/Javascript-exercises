// 1 - Create a function that takes two arguments, sums them and returns the sum
// 2 - Create a function that takes two arguments, substract them and returns the difference
// 3 - Create a function that takes two arguments, divides them and returns the reminder
// 4 - Create a function that takes two arguments, multiplies them and returns the product
function sum(number1, number2) {
  return number1 + number2;
}
// console.log(sum(2, 3));

function substract(num1, num2) {
  return num1 - num2;
}
// console.log(substract(5, 1));

function division(number1, number2) {
  number1 / number2;
  return number1 / number2;
}
// console.log(division(15, 2));

function multiply(number1, number2) {
  return number1 * number2;
}
// console.log(multiply(3, 3));
// 5 - Create a function that takes two arguments, said numbers, and returns a list, starting from the
// first number and ending in the second number. No.5 Example, if you pass 5, 10 the function returns [5,6,7,8,9,10],
// include both numbers as part of the list
// 6 - Create a function that replaces the word  (string) "perrito" in the sentence "El perrito lindo, es muy bonito,
// oh, mi bello perrito" with the word "gatito". Or any other sentence (string) passed as an argument.
function listOfNumbers(number1, number2) {
  let list = [];
  for (let i = number1; i <= number2; i++) {
    list.push(i);
  }
  return list;
}
// console.log(listOfNumbers(2, 100));

function weAreCatPeople(sentence) {
  return sentence.replace(/perrito/g, "gatito");
}
// console.log(
//   weAreCatPeople("El perrito lindo, es muy bonito, oh, mi bello perrito")
// );

// 7 - Create a function that takes two numbers, A and B. and it returns "Yes" if B is multiple of A.
// return "No"  otherwise.
// 8 - Create a function that returns the length of a word, how many vowels and how many consonants are
// in the word. (This function must take a string as a argument)

function multipleOf(number1, number2) {
  if (number1 % number2 === 0) {
    return "Yes";
  } else {
    return "No";
  }
}
// console.log(multipleOf(5, 2));

function lengthOf(word) {
  let wordLength = word.length;
  let vowels = 0;
  let consonant = 0;
  for (let i = 0; i < wordLength; i++) {
    if (["a", "e", "i", "o", "u"].includes(word[i].toLowerCase())) {
      vowels++;
    } else {
      if (
        word.toLowerCase().charCodeAt(i) > 97 &&
        word.toLowerCase().charCodeAt(i) < 122
      ) {
        consonant++;
      }
    }
  }
  return [wordLength, vowels, consonant];
}
console.log(lengthOf("palabra "));
