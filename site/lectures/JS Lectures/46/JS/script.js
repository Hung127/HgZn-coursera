// Functions are First-Clas Data Types
// Functions ARE objects

function multiply (x,y) {
    return x * y
}

multiply.version = 'v.0.0.1'

console.log(multiply.toString());
console.log(multiply.version);

function makeMultiplier (multiplier) {
    let myfunc = function (x) {
        return x * multiplier;
    };

    let yourfunc = function(x) {
        return x + 100;
    };

    return myfunc;
}

let multiplyBy4 = makeMultiplier(4);
console.log(multiplyBy4(100));
let doubleAll = makeMultiplier(2);
console.log(doubleAll(100));