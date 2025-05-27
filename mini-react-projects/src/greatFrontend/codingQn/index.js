 function makeCounter(initialValue = 0) {
    let count = initialValue
    console.log({count, initialValue});
    
    return function(){
        console.log(count, "dfert");
        
        return count ++
    }
}
const counter = makeCounter(5)
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

//To create a counter that behaves like your example — returning a new incremented value on each call — 
// you need to return a function from makeCounter that remembers its state (closure). Here's how you can do that:
