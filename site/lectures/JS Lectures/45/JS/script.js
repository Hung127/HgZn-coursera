// // Object creation
// let company = new Object();
// company.name = "Lychee";

// company.ceo = new Object();
// company.ceo.firstName = "Eechyl";
// company.ceo.favcolor = "Transparent";
// company["stock of company"] = 993;

// console.log(company);
// console.log("Company CEO name is: " + company.ceo.firstName);
// console.log(company["name"]);
// console.log("Stock price is: " + company["stock of company"]);

//Better way: object literal

let company = {
    name: "Lychee",
    ceo: {
        firstName: "Eehcyl",
        // The last name/value pair inside of the object {} doesn't get a comma ";" at the end
        favColor: "Gray"
    },
    $stock: 100,
};

console.log(company);
console.log(`The company name is: ${company.name}`);