// // Copy by Reference vs by Value
// let a = 7;
// let b = a;
// console.log(`a = ${a}`);
// console.log(`b = ${b}`);

// b = 5;
// console.log("After b update: ");
// console.log(`a = ${a}`);
// console.log(`b = ${b}`);


// let a = {x: 100};
// let b = a;
// console.log(a);
// console.log(b);

// b.x = 200;
// console.log("After b.x update:");
// console.log(a);
// console.log(b);


// // Pass by reference vs by value
// function changePrimitive(primValue) {
//     console.log("in changePrimitive...");
//     console.log("Before:");
//     console.log(primValue);

//     primValue = 105;
//     console.log("after");
//     console.log(primValue);
// }

// let value = 7;
// changePrimitive(7);
// console.log("after changeP");
// console.log(value);


function changeObject(objValue) {
    console.log("in changeObject...");
    console.log("Before:");
    console.log(objValue);

    objValue.x = 564;
    console.log("After:");
    console.log(objValue);
}

value = {x: 7};
changeObject(value);
console.log("after changeObject, origin value: ");
console.log(value);