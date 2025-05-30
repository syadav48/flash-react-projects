function curry(fn) {
  return function curried(...args){
        if(args.length >= fn.length){
            return fn(...args)
        } else{
            return function(...args2){
                return curried(...args, ...args2)
            }
        }
  }
}


function join(a, b, c){
    return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)
console.log(curriedJoin(1, 2, 3))
console.log(curriedJoin(1)(2, 3));
console.log(curriedJoin(1, 2)(3) );