$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,

        nav: true,
        dots: false,

        navText: ["<img src='images/Arrow-left.svg'>",
            "<img src='images/Arrow-right.svg'>"
        ],
        autoplayTimeout: 10000,
        smartSpeed: 1000,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
});