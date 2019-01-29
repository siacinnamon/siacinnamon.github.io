$(function () {
    $(document).scroll(function () {
        let $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});


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
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    })

});


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


$(document).ready(function () {
    $("#navbarNavDropdown a").click(function (event){
        event.preventDefault();
        event.stopImmediatePropagation();
        $("#navbarNavDropdown").removeClass('show');
    })
});


