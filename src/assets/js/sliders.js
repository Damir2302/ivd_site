$(document).ready(function() {

    // HERO SLIDER
    let heroSlider;

    heroSliderRun();

    function heroSliderRun() {
        heroSlider = new Swiper(".hero__slider .swiper", {
            slidesPerView: 1,

            navigation: {
                nextEl: '.hero__arrow--next',
                prevEl: '.hero__arrow--prev',
            },

            pagination: {
                el: ".slider-pagination",
                clickable: true,
            }
        })
    }

    // ABOUT PAGE
    let aboutClientsSlider = new Swiper('.about__clients .swiper', {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,

        breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            744: {
                slidesPerView: 2,
                spaceBetween: 30,
            },

            1400: {
                slidesPerView: 2,
                spaceBetween: 40,
            }
        },

        navigation: {
            nextEl: '.about__clients .swiper-nav-next',
            prevEl: '.about__clients .swiper-nav-prev',
        }
    })

    let aboutReviewsSlider = new Swiper('.about__reviews .swiper', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        loop: true,

        breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            744: {
                slidesPerView: 2,
                spaceBetween: 30,
            },

            1400: {
                slidesPerView: 2,
                spaceBetween: 40,
            }
        },

        navigation: {
            nextEl: '.about__reviews .swiper-nav-next',
            prevEl: '.about__reviews .swiper-nav-prev',
        }
    })

})