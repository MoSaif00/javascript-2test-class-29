// ## Question 1:

// Explain what and why will be logged on the console if we run this code snippet?
/*
The Answer:

The output will be index:4 logged four times after 3 seconds , because we have closure inside the setTimout()method.
and the anonymous function that inside the setTimeout()method has access to the variable i inside for-loop becaues var is function scope .
so the loop will iterate through the array 4 times and the closure will be called 4 times and the variable i will be alreayd incrementd to 4  by the time settimeout()method finish after 3 seconds so it will show index:4 four times .  
*/


// Bonus: explain what and why will be logged on the console if we used let instead of var inside the for loop?
/*
The Answer:

if we use let instead of varThe output will be index:0, index:1, index:2, index:3 because let is block scope .
so it will create new variable every time iterate through the array .
*/


const myFunction = () => {
  const arr = [10, 12, 15, 21];
  for (var i = 0; i < arr.length; i++) {
    setTimeout(function() {
      console.log('Index: ' + i);
    }, 3000);
  }
};
myFunction(); 

// const myFunction = () => {
//     const arr = [10, 12, 15, 21];
//     for (let i = 0; i < arr.length; i++) {
//       setTimeout(function() {
//         console.log('Index: ' + i);
//       }, 3000);
//     }
//   };
//   myFunction(); 