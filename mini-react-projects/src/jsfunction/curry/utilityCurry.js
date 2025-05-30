//Write a generic curry function that takes any function fn and returns its curried version. 
// This curry function should be able to handle functions with any number of arguments.

function curry(fn){
    return function curried(...args){
         // If the number of arguments collected is enough, execute the original function
        if(args.length >= fn.length){
             // Otherwise, return a new function that collects more arguments             
            //return fn.apply(this, args)
            return fn(...args)
        } else{
            return function(...nextArgs){                
                return curried(...args, ...nextArgs)
            }
        }
    }
}


function sumThree(a, b, c) {
    return a + b + c
}

const curriedSumThree = curry(sumThree)
console.log(curriedSumThree(1)(2)(3));
console.log(curriedSumThree(1, 2)(3));
console.log(curriedSumThree(1)(2, 3));
console.log(curriedSumThree(1, 2, 3));

function greetUser (salutation, firstName, lastName){
    return `${salutation} ${firstName} ${lastName}`
}

const greet = curry(greetUser)
const hello = greet('Hello')
const john = hello('John')
console.log(john('Doe'));


