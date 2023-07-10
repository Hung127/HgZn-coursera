function sayHello() {
    let name = document.getElementById("name").value;
    name = name || "user";
    message = `<h2>Hello ${name}!</h2>`

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
}