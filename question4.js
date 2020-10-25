// ## Question 4:
// What's the output for this snippet? Is the output deterministic (always the same) or might it depend on the browser
// we run this in? 
// Explain your answer in less than 150 words. (The 'yes or no' answer doesn't really matter to us, 
// the explanation why is the important part)

/*
the output will be : 

one
six
four
two
five
three

it will always run the same answer , it will first log one becuse it is first one logged inside the function test().
then it will log six because one and six are logged in the  global scope , 
then we have two settimeout() methods one with timing 1second and the second after 0 second will call 
inside the first setTimeout() method there is another setTimeout()method with timing 0 , and the second setTimeout()method in the global scope has another setTimeout()method with timing 1 second
so first setTimeout() method will be called in one second then it will go the second one in the global scope which has four looged first then after one second (two ) will be logged from the first setTimeout method then it will go wait for 1 second again so
the setTimeout()method on the second second setTimeout()method in the global scope will be ready to log in the console so it will log number five then last one will be called number three

*/
function test() {
    console.log('one');
    setTimeout(function() {
        console.log('two');
        setTimeout(function() {
            console.log('three');
        }, 0);
    }, 1000);
    setTimeout(function() {
        console.log('four');
        setTimeout(function() { 
            console.log('five');
        }, 1000);
    }, 0);
    console.log('six');
}
test();