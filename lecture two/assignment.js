//1
let challenge = "50 Days Of JavaScript";

//2
console.log(challenge);

//3
console.log(challenge.length);

//4
console.log(challenge.toUpperCase());

//5
console.log(challenge.toLowerCase());

//6
console.log(challenge.substring(0, 2));

//7
console.log(challenge.substring(3));

//8
console.log(challenge.includes("Script"));

//9
console.log(challenge.split(""));

//10
console.log(challenge.split(" "));

//11
let social = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(social.split(", "));

//12
console.log(challenge.replace("JavaScript", "Python"));

//13
console.log(challenge.charAt(15));

//14
console.log(challenge.charCodeAt(challenge.indexOf("J")));

//15
console.log(challenge.lastIndexOf("a"));

//16
let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));

//17
console.log(sentence.lastIndexOf("because"));

//18
console.log(sentence.search("because"));

//19
let spaced = " 50 Days Of JavaScript ";
console.log(spaced.trim());

//20
console.log(challenge.startsWith("50"));

//21
console.log(challenge.endsWith("JavaScript"));

//22
console.log(challenge.match(/a/g));

//23
let part1 = "50 Days Of ";
let part2 = "JavaScript";
console.log(part1.concat(part2));

//24
console.log(challenge.repeat(2));
