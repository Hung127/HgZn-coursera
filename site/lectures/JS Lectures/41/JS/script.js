var message = "in global";
var x = 2;
console.log("Global: message = "+ message + " and x = " + x);

var a = function () {
    var message = "inside a";
    console.log("a: message = " + message);
    
    function b () {
        console.log("b: message = " + message);
    }
    b()
}

function b () {
    console.log("b2: message = " + message);
}

a();
b();