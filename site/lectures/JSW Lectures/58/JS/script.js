// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
              var message = `His name is ${res.firstName} ${res.lastName} and his quote is: "${res.quote}!"`
              console.log(typeof res);

              document.querySelector("#content")
                .innerHTML = `<h2>${message}</h2>`;
            });

        
      });
  }
);