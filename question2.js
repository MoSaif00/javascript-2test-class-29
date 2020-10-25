// ## Question 2:

// Explain what and why would be logged on the console?
/*
The Answer : 

It will show an error that hoisted() is not function because first hoisted was declared as variable with string assigned to it but not called.
but if we change the variable or the function name and execute as the second snippet below , it will print ' I'm a function ' because we returnd the value of the function hoisted().
*/

//    function parent() {
//      var hoisted = "I'm a variable";
//      function hoisted() {
//          return "I'm a function";
//      }
//      return hoisted(); 
//    }
//    console.log(parent());


function parent() {
    var hoistedVar = "I'm a variable";
    function hoisted() {
        return "I'm a function";
    }
    return hoisted(); 
  }
  console.log(parent());
