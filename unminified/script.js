// ----- nav-bar change color

$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

$(document).ready(function () {

    // ----- slow scroll

    $('body').scrollspy({target: ".navbar", offset: 50});
    $("#navbarNavDropdown a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = '';
            });
        }
    });

    // ----- carousel

    $(".wrapper").slick({
        autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    });

    // ----- hide drop-down menu when clicking on a menu item

    $("#navbarNavDropdown a").click(function (event){
        event.preventDefault();
        event.stopImmediatePropagation();
        $("#navbarNavDropdown").removeClass('show');
    })
});

// ----- parallax

var controller = new ScrollMagic.Controller();
var slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: '.bgc-parallax',
    triggerHook: 1,
    duration: '100%'
})
    .setTween(TweenMax.from('.bgc', 1, {y: '-80%', ease: Power0.easeNone}))
    .addTo(controller);

// ----- deferred images loading for better performance

window.onload = function(){
    var $imgs = $(".carousel-img")
    for(var i = 0; i < $imgs.length; i++){
        var img_src = $($imgs[i]).attr("data-src")
        $($imgs[i]).attr("src", img_src)
    }

    $('iframe.footer-item-2').attr('src', 'https://maps.google.com/maps?width=100%&height=600&hl=en&q=Taras%20Shevchenko%20streer%2C%20Sniatyn+(Your%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed');
};