window.addEventListener("DOMContentLoaded", function() {
    var navbar__toggle = document.querySelector(".navbar--toggle");
    var header__nav = document.querySelector(".header__navbar");
    var toggle__img = document.querySelector(".navbar--toggle__icon");
    var overlay = document.querySelector(".overlay");


    navbar__toggle.addEventListener("click", function() {
        header__nav.classList.toggle("active");

        if (toggle__img.className != "cancel") {
            toggle__img.src = "images/cancel_1.svg";
            toggle__img.className = "cancel";
            overlay.classList.add("active");


        } else if (toggle__img.className == "cancel") {
            toggle__img.src = "images/menu_2.svg";
            toggle__img.className = "menu";
            overlay.classList.remove("active");
        }
    });
}, false);