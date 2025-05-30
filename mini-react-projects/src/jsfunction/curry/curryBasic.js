//Currying is a functional programming technique where a function that takes multiple arguments is transformed into a sequence of functions that each take a single argument.

const curry = (a) => {
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}
console.log(curry(3)(4)(7));
const curried = (a) => (b) => (c) => a + b + c
console.log(curried(1)(2)(3));




