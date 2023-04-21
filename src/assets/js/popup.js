$(document).ready(function () {

    // ДЛЯ ВСЕХ(!!!!!!) ВСПЛЫВАЮЩИХ ОКОН [Если кликаем за пределы всплывающего окна, закрываем это окно]
    $("html").on("click", function (e) {
        if (!$(e.target).closest('.nav').length &&
            !$(e.target).closest('.header__burger').length) {

            $("body").removeClass("overflow-hidden")
            $('#page').removeClass('bg-overlay')

            $('.navbar').removeClass('opened')
            $('.header__burger').removeClass('opened')
        }
    });

    function openMobMenu() {
        $('.header__burger').on('click', function() {
            $('body').toggleClass('overflow-hidden')
            $('#page').toggleClass('bg-overlay')
            $(this).toggleClass('opened')
            $('.navbar').toggleClass('opened')
        })
    }

    openMobMenu();

});