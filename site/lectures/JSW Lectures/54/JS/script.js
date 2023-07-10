document.addEventListener("DOMContentLoaded",
    function sayHello(event) {
        console.log(event.ctrlKey);
        let name = document.getElementById("name").value;
        name = name || "user";
        message = `<h2>Hello ${name}!</h2>`
        this.textContent = "siuuuu";
    
        document
            .getElementById("content")
            .innerHTML = message;
    
        if (name === "student") {
            let title = document
                            .querySelector("#title")
                            .textContent;
            title += " Siuuu";
            document
                .querySelector("#title")
                .textContent = title;
        }
    
    
    // Unobstrucsive event binding
    document.querySelector("button").addEventListener("click",sayHello);
    document.querySelector("button").addEventListener("mousemove", function (event) {
        if (event.shiftKey == true) {
            console.log("x: " + event.clientX);
            console.log("y: " + event.clientY);
        }
    });
    
    // document.querySelector("button").onclick = sayHello;
})