console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName = "Ross";
let lastName = "Burns";
var age = "40";



// Exercise 2
let fullName = firstName + " " + lastName; //Ross Burns
//or
let templateFullName = `${firstName} ${lastName}` //Ross Burns

console.log(fullName);
console.log(templateFullName);

// Exercise 3
let myStory; // undefined

let home = "Birmingham";

let pastime = "cars";

home = "Hoover";

myStory = `My name is ${fullName}. I am from ${home}. I enjoy ${pastime}.`;

console.log(myStory);