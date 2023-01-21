// /*
// // 1 - Create a function that takes two arguments, sums them and returns the sum
// // 2 - Create a function that takes two arguments, substract them and returns the difference
// // 3 - Create a function that takes two arguments, divides them and returns the reminder
// // 4 - Create a function that takes two arguments, multiplies them and returns the product
// function sum(number1, number2) {
//   return number1 + number2;
// }
// // console.log(sum(2, 3));

// function substract(num1, num2) {
//   return num1 - num2;
// }
// // console.log(substract(5, 1));

// function division(number1, number2) {
//   number1 / number2;
//   return number1 / number2;
// }
// // console.log(division(15, 2));

// function multiply(number1, number2) {
//   return number1 * number2;
// }
// // console.log(multiply(3, 3));
// // 5 - Create a function that takes two arguments, said numbers, and returns a list, starting from the
// // first number and ending in the second number. No.5 Example, if you pass 5, 10 the function returns [5,6,7,8,9,10],
// // include both numbers as part of the list
// // 6 - Create a function that replaces the word  (string) "perrito" in the sentence "El perrito lindo, es muy bonito,
// // oh, mi bello perrito" with the word "gatito". Or any other sentence (string) passed as an argument.
// function listOfNumbers(number1, number2) {
//   let list = [];
//   for (let i = number1; i <= number2; i++) {
//     list.push(i);
//   }
//   return list;
// }
// // console.log(listOfNumbers(2, 100));

// function weAreCatPeople(sentence) {
//   return sentence.replace(/perrito/g, "gatito");
// }
// // console.log(
// //   weAreCatPeople("El perrito lindo, es muy bonito, oh, mi bello perrito")
// // );

// // 7 - Create a function that takes two numbers, A and B. and it returns "Yes" if B is multiple of A.
// // return "No"  otherwise.
// // 8 - Create a function that returns the length of a word, how many vowels and how many consonants are
// // in the word. (This function must take a string as a argument)

// function multipleOf(number1, number2) {
//   if (number1 % number2 === 0) {
//     return "Yes";
//   } else {
//     return "No";
//   }
// }
// // console.log(multipleOf(5, 2));

// function lengthOf(word) {
//   let wordLength = word.length;
//   let vowels = 0;
//   let consonant = 0;
//   for (let i = 0; i < wordLength; i++) {
//     if (["a", "e", "i", "o", "u"].includes(word[i].toLowerCase())) {
//       vowels++;
//     } else {
//       if (
//         word.toLowerCase().charCodeAt(i) > 97 &&
//         word.toLowerCase().charCodeAt(i) < 122
//       ) {
//         consonant++;
//       }
//     }
//   }
//   return [wordLength, vowels, consonant];
// }
// // console.log(lengthOf("palabra "));

// /*9 - Create a function that loops over the array beneath and each it finds a number 1 console.log("Found one!"). 
// 10 - Create a function that loops over the array beneath and returns the indexes in which 1 appears. E.g., 
// if the list is [0, 1, 0, 1, 0, 0], it would return [1, 3]. 

// 11 - Complete Project Euler No.1*/
// masterArray = [
//   1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0,
//   1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0,
//   1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0,
//   1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0,
//   1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0,
//   0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1,
//   1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1,
//   1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0,
//   0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1,
//   1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1,
// ];
// function masterArrayList() {
//   for (let i = 0; i < masterArray.length; i++) {
//     if (masterArray[i] !== 0) {
//       console.log("Found one!", masterArray[i]);
//     }
//   }
// }
// // console.log(masterArrayList());
// // masterArrayList();

// function masterArrayList2() {
//   let arrayOfOnes = [];
//   for (let i = 0; i < masterArray.length; i++) {
//     if (masterArray[i] !== 0) {
//       arrayOfOnes.push(i);
//     }
//   }
//   return arrayOfOnes;
// }
// // console.log(masterArrayList2());

// /*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.*/
// /*function multiples(number) {
//   let sum = 0;
//   multiplesOfTen = [];
//   for (let i = 0; i < 10; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//       multiplesOfTen.push(i);
//     }
//   }
//   console.log(multiplesOfTen);
//   return sum;
// }
// console.log(multiples(10));*/
// // sum of multiples of 3 or 5 below 1000 --------------------------------------->
// function multiples(number) {
//   let sum = 0;
//   for (let i = 0; i < 1000; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum = sum + i;
//     }
//   }
//   return sum;
// }
// console.log(multiples(1000));


/*The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.*/


// function tellFortune(numberOfChildren, partnerName, geographicLocation, jobTitle) {
//   console.log(`You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kid(s).`);
// }

// tellFortune(5,'Joanna','Texas','Programmer');
// tellFortune(1,'Xavier','New York','Marketing Manager');
// tellFortune(4,'Melisa','Ohaio','Administrative Assistant');

// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
function areaOfTriangle(side1, side2, side3) {
  s = (side1 + side2 + side3)/2;
  area = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
  return area;
}

console.log(areaOfTriangle(5,6,7));