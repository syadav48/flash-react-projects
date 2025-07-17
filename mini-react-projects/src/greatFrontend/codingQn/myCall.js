
Function.prototype.myCall = function(thisArg, ...argArray){
            thisArg = thisArg || globalThis
            const fnKey = Symbol()    
            thisArg[fnKey] = this
            const result = thisArg[fnKey](...argArray)            
            delete thisArg[fnKey]
            return result
}

function multiplyAge(multiplier = 1) {
  return this.age * multiplier;
}

function multiplyNum(multiplier = 1) {
  return this.num * multiplier;
}
const mary = {
  age: 21,
};

const john = {
  age: 42,
};
const max = {
    num: 5
}
console.log(multiplyNum.myCall(max, 5))
console.log(multiplyAge.myCall(mary));
console.log(multiplyAge.myCall(john, 2));

