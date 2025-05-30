function curry(fn){
    return function curried(...args){
        console.log(args, "argss");
        
        if(args.length >= fn.length){
            return fn.apply(this, args.filter((e) => e !== this?.placeholder))
        } else {
            return function(...nextArgs){
                return curried(...args, ...nextArgs)
            }
        }
    }
}

const  join = (a, b, c) => {
   return `${a}_${b}_${c}`
}
const curriedJoin = curry(join)
const _ = curry.placeholder
console.log(curriedJoin(1, 2, 3));
console.log(curriedJoin(_, 2)(1, 3)) // '1_2_3'

//TBI

