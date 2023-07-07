// Object literals and "this"

let literalCircle = {
    radius: 10,
    getArea: function () {
        let self = this;

        let increaseRadius = function () {
            self.radius = 50;
        }
        increaseRadius();
        return Math.PI * Math.pow(self.radius, 2);
    }
};

console.log(literalCircle.getArea());