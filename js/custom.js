//for slider
$('.slider-section .owl-carousel').owlCarousel({
    loop: true,
    responsiveClass: true,
     margin: 30,
    responsive: {
        320: {
            items: 1,
            nav: true
        },
        767: {
            items: 2,
            nav: true,
            margin: 20,
        },
        768: {
            margin:20,
            items:2,
        },
        980: {
            items: 3,
            margin: 20,
            nav: true,
        },
        1025: {
            items: 3,
            margin:30,
            nav: true,
            loop: false,
        }

    }
})
//for counter-increment

var counted = 0;
$(window).scroll(function() {

    var oTop = $('.counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {

                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        counted = 1;
    }

});
//for mobile menu

document.addEventListener(
    "DOMContentLoaded", () => {
        new Mmenu("#menu", {
            "offCanvas": {
                "position": "right-front"
            },
            "theme": "light",
            "navbars": [{
                    "position": "top",
                    "content": [
                        "searchfield"
                    ]
                },

            ]
        });
    }
);