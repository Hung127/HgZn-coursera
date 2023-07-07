// Function construtors
function Circle (radius) {
    this.radius = radius;
}

Circle.prototype.getArea = function () {
    return Math.PI * Math.pow(this.radius, 2);
};

let myCircle = new Circle(10);
console.log(myCircle.getArea());