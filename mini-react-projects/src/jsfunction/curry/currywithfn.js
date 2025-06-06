//Currying is a functional programming technique where a function that takes multiple arguments is transformed into a sequence of functions that each take a single argument.

function curry(fn) {
  return function curried(...args){    
    if(args.length >= fn.length){      
        return fn.apply(this, args)
    } else {
        return function(...args2){
            return curried.apply(this, args.concat(args2))
        }
    }
  }
}


const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}
const curriedJoin = curry(join)
console.log(curriedJoin(1, 2, 3))// '1_2_3'
console.log(curriedJoin(1)(2, 3)) // '1_2_3'
console.log(curriedJoin(1, 2)(3)) // '1_2_3'



