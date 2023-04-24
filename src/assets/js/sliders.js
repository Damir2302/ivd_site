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

            744: {
                slidesPerView: 2,
                spaceBetween: 8,
                grid: false
            },

            
            1024: {
                slidesPerView: 1,
                spaceBetween: 8,
                grid: {
                    rows: 2
                }
            }
        },

        navigation: {
            nextEl: '.about__clients .swiper-nav-next',
            prevEl: '.about__clients .swiper-nav-prev',
        }
    })

    let aboutReviewsSlider = new Swiper('.about__reviews .swiper', {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,

        breakpoints: {

            744: {
                slidesPerView: 2,
                spaceBetween: 8,
            }
        },

        navigation: {
            nextEl: '.about__reviews .swiper-nav-next',
            prevEl: '.about__reviews .swiper-nav-prev',
        }
    })

})