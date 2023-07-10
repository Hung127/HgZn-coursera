$(function () {
    $(".navbar-toggler").blur(function (event) {
        let screenwidth = window.innerWidth;
        if (screenwidth < 992) {
            $("#navbarSupportedContent").collapse("hide");
        }
    });
});

(function (global) {

    // Set the URI to a variable
    let homeHTML = "snippets/home.html";
    let aboutHTML = "snippets/about.html";
    sk = {};

    // Define a function which inserts more html to the page
    let inserthtml = function (selector, html) {
        let selectElem = document.querySelector(selector);
        // console.log(html);
        selectElem.innerHTML = html;
    };

    // Define a function which show a loading gif to the page
    let showloading = function (selector) {
        let loading = "<img src='images/Onlyshark.png'>"
        // console.log(selector);
        inserthtml(selector,loading);
    };

    document.addEventListener("DOMContentLoaded",function () {

        let aboutButton = document.querySelector("#about");
        // Add onclick event to about button
        aboutButton.addEventListener("click", function () {
            showloading("#main-content");
            // GET The content of about.html
            $ajaxUtils.sendGetRequest(aboutHTML, function (res) {
                inserthtml("#main-content",res);
                buttonAbout = document.querySelector("#about");
                buttonAbout.classList.add("active");
                document.querySelector("#home").classList.remove("active");
            }, false)
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        //Show loading screen
        showloading("#main-content");

        //GET The home.html and insert it to the page
        $ajaxUtils.sendGetRequest(homeHTML, function (res) {
            inserthtml("#main-content",res);
        }, false)

    })

    global.$sk = sk;

})(window);