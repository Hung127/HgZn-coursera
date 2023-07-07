// // Arrays

// let array = new Array();
// array[0] = "Lychee";
// array[1] = 2;
// array[2] = function(name) {
//     name = name || "user";
//     console.log(`Hello ${name}`);
// };
// array[3] = {course: "company"};
// console.log(array);
// console.log(array[1]);
// console.log(array[2]());
// console.log(array[3].course);

// // Short hand array creation
// let names = ["Lychee","Eehcyl", "Lime"];
// console.log(names);

// for (let i = 0; i < names.length; i++) {
//     console.log(`Hello ${names[i]}`);
// }


let names = ["Lychee","Eehcyl", "Lime"];

// let myObj = {
//     name: "Lychee",
//     course: "company",
//     color: "lime"
// };

// for (let prop in myObj) {
//     console.log(`${prop}: ${myObj[prop]}`);
// }

for (let name in names) {
    console.log(`Hello ${names[name]}`);
}

names.greeting = "Hello!";

for (let name in names) {
    console.log(`Hello ${names[name]}`);
}