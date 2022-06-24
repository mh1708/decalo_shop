window.addEventListener("DOMContentLoaded", function() {
    var navbar__toggle = document.querySelector(".navbar--toggle");
    var header__nav = document.querySelector(".header__navbar");
    var toggle__img = document.querySelector(".navbar--toggle__icon");
    var overlay = document.querySelector(".overlay");
    var narrow_down = document.querySelector(".nav--down");
    var sub_nav = document.querySelector(".header__subnav");




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
    narrow_down.addEventListener("click", function() {
        this.classList.toggle("turn_up");
        sub_nav.classList.toggle("active")
    });
    // accordion
    var acc = document.getElementsByClassName("faq__button");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;

            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";


            }
        })

    }
    // tab
    var tab__btn = document.querySelectorAll(".faq__links");

    var tabContent = document.querySelectorAll(".faq__content");

    tab__btn.forEach(function(el) {
        el.addEventListener("click", openTabs);
    });

    function openTabs(el) {
        var btn = el.currentTarget; // lắng nghe sự kiện và hiển thị các element
        var faq = btn.dataset.faq; // lấy giá trị trong data-electronic

        tabContent.forEach(function(el) {
            el.classList.remove("active");
        });

        tab__btn.forEach(function(el) {
            el.classList.remove("active");
        });

        document.querySelector("#" + faq).classList.add("active");

        btn.classList.add("active");
    }
    // increaseValue decreaseValue
    var minus = document.querySelector("#decrease");
    var plus = document.querySelector("#increase");
    var number = document.querySelector("#number");

    var quantity = 1;
    number.value = quantity;
    minus.addEventListener("click", function() {
        if (quantity > 1) {
            quantity--;
            number.value = quantity;
        }
    });
    plus.addEventListener("click", function() {
        quantity++;
        number.value = quantity;
    })







}, false);