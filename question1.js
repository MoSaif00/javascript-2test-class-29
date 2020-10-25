// ## Question 1:

// Explain what and why will be logged on the console if we run this code snippet?
/*

*/


// Bonus: explain what and why will be logged on the console if we used let instead of var inside the for loop?
/*

*/


const myFunction = () => {
  const arr = [10, 12, 15, 21];
  for (let i = 0; i < arr.length; i++) {
    setTimeout(function() {
      console.log('Index: ' + i);
    }, 3000);
  }
};
myFunction(); 