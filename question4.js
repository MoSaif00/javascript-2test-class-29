## Question 4:
What's the output for this snippet? Is the output deterministic (always the same) or might it depend on the browser
we run this in? 
Explain your answer in less than 150 words. (The 'yes or no' answer doesn't really matter to us, 
the explanation why is the important part)

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
        }, 1000);c
    }, 0);
    console.log('six');
}
test();