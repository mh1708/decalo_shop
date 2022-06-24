window.addEventListener("DOMContentLoaded", function() {
    var search = document.querySelector(".header__manupication");
    var search__box = document.querySelector(".search__box");
    var favor = document.querySelector(".header__favor--click");
    var header__favor = document.querySelector(".header__favor");
    var user = document.querySelector(".header__user--hover");
    var header__user = document.querySelector(".header__user");

    search.addEventListener("click", function() {
        search__box.classList.toggle("show");
        header__favor.classList.remove("show");
        header__user.classList.remove("show");


    })
    favor.addEventListener("click", function() {
        header__favor.classList.toggle("show");
        search__box.classList.remove("show");
        header__user.classList.remove("show");


    })
    user.addEventListener("click", function() {
        header__user.classList.toggle("show");
        header__favor.classList.remove("show");
        search__box.classList.remove("show");

    })


})