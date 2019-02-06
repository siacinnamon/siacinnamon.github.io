$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

// -----

$(document).ready(function () {
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

    })

});

// -----

$(document).ready(function(){
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 50});

    // Add smooth scrolling on all links inside the navbar
    $("#navbarNavDropdown a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }  // End if
    });
});

// -----

$(document).ready(function () {
    $("#navbarNavDropdown a").click(function (event){
        event.preventDefault();
        event.stopImmediatePropagation();
        $("#navbarNavDropdown").removeClass('show');
    })
});


var controller = new ScrollMagic.Controller();
var slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: '.bgc-parallax',
    triggerHook: 1,
    duration: '100%'
})
    .setTween(TweenMax.from('.bgc', 1, {y: '-80%', ease: Power0.easeNone}))
    .addTo(controller);



window.onload = function(){
    var $imgs = $(".carousel-img")
    for(let i = 0; i < $imgs.length; i++){
        let img_src = $($imgs[i]).attr("data-src")
        $($imgs[i]).attr("src", img_src)
    }

    $('iframe.footer-item-2').attr('src', 'https://maps.google.com/maps?width=100%&height=600&hl=en&q=Taras%20Shevchenko%20streer%2C%20Sniatyn+(Your%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed');
};