// parallax on mousemove
let scene = document.getElementById('scene');
let parallax = new Parallax(scene);

// hide/show navigation
$(function () {
    let headroom = document.querySelector('.headroom');
    var lastScrollTop = 0;
    $(window).scroll(function () {
        var nowScrollTop = $(this).scrollTop();
            if (nowScrollTop > lastScrollTop) {
                if ($(this).scrollTop() < 20) {
                    headroom.classList.add('headroom-pinned');
                    setTimeout(() => {
                        headroom.classList.add('headroom-pinned-duration-down');
                    }, 100);
                    setTimeout(() => {
                        headroom.classList.remove('headroom-pinned');
                    }, 400);
                    setTimeout(() => {
                        headroom.classList.remove('headroom-pinned-duration-down');
                    }, 700);
                }
            }
            lastScrollTop = nowScrollTop;      
    });
});

// counter number
var a = 0;
$(window).scroll(function () {
    var oTop = $('#counter-block').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.timer').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({ countNum: $this.text() }).animate({ countNum: countTo }, {
                duration: 7000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }
            });
        });
        a = 1;
    }
});
// teacher-course-slider
$(document).ready(function() {
    $('#teacher-course-slider .owl-carousel').owlCarousel({
        loop:true,
        margin:15,
        nav:false,
        autoplay: true,
        autoplayTimeout: 2750,
        smartSpeed: 2000,
        responsive:{
            0:{
                items:1
            },
            567:{
                items:1
            },
            768: {
                items:3
            },
            992:{
                items:4
            }
        },
    })
});
//our-team-slider
$(document).ready(function() {
    $('#our-team-slider .owl-carousel').owlCarousel({
       
        margin:15,
        nav:false,
        autoplay: true,
        autoplayTimeout: 2750,
        smartSpeed: 2000,
        responsive:{
            0:{
                items:1
            },
            567:{
                items:1
            },
            768: {
                items:3
            },
            992:{
                items:4
            },
            1400:{
                items:5
            }
        },
    })
});
//section testimonial from people
$(document).ready(function() {
    $('#testimonial-slider .owl-carousel').owlCarousel({
        loop:true,
        margin:15,
        nav:false,
        autoplay: true,
        autoplayTimeout: 2750,
        smartSpeed: 2000,
        center: true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            567:{
                items:1
            },
            768: {
                items:3
            },
            992:{
                items:3
            }
        },
    })
});
