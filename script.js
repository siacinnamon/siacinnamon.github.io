$(function(){$(document).scroll(function(){var o=$(".navbar");o.toggleClass("scrolled",$(this).scrollTop()>o.height())})}),$(document).ready(function(){$("body").scrollspy({target:".navbar",offset:50}),$("#navbarNavDropdown a").on("click",function(o){if(""!==this.hash){o.preventDefault();var e=this.hash;$("html, body").animate({scrollTop:$(e).offset().top},800,function(){window.location.hash=e})}}),$(".wrapper").slick({autoplay:!0,autoplaySpeed:1500,infinite:!0,arrows:!1,pauseOnFocus:!1,pauseOnHover:!1,slidesToShow:3,responsive:[{breakpoint:1025,settings:{slidesToShow:2}},{breakpoint:450,settings:{slidesToShow:1}}]}),$("#navbarNavDropdown a").click(function(o){o.preventDefault(),o.stopImmediatePropagation(),$("#navbarNavDropdown").removeClass("show")})});var controller=new ScrollMagic.Controller,slideParallaxScene=new ScrollMagic.Scene({triggerElement:".bgc-parallax",triggerHook:1,duration:"100%"}).setTween(TweenMax.from(".bgc",1,{y:"-80%",ease:Power0.easeNone})).addTo(controller);window.onload=function(){for(var o=$(".carousel-img"),e=0;e<o.length;e++){var a=$(o[e]).attr("data-src");$(o[e]).attr("src",a)}$("iframe.footer-item-2").attr("src","https://maps.google.com/maps?width=100%&height=600&hl=en&q=Taras%20Shevchenko%20streer%2C%20Sniatyn+(Your%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed")};