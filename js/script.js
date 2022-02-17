$(function () {
    'use strict';


    // counter Up start

    $('.count').counterUp({
        delay: 10,
        time: 1000,
    });
    // counter up end



    // menu fix start
    $(window).scroll(function () {
        let scrolling = $(this).scrollTop();

        if (scrolling > 40) {
            $('#main_menu').addClass('fix_menu')
        } else {
            $('#main_menu').removeClass('fix_menu')
        }
    });
    // menu fix end





    // slider part start

    $('.main_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow: '<i class="fas fa-chevron-left prev_arr"></i>',
        nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
        dots: true,
    });
    // slider part end





    // filter up menu

    var containerEl = document.querySelector('.work_row');
    var mixer = mixitup(containerEl);

    // filter up menu





    // video part start

    new VenoBox({
        selector: '.video',
    });
    // video part end





    // footer slider start

    $('.foot_banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow: false,
        nextArrow: false,
        dots: false,
    });
    // footer slider end




    // type js part start
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 100,
        loop: true,
        backSpeed: 70,
    });
    // type js part end





    // top to back button start 
    $('#bc_top').click(function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 2000)
    });


    $(window).scroll(function () {
        let scrolling = $(this).scrollTop()

        if (scrolling > 200) {
            $('#bc_top').fadeIn()
        } else {
            $('#bc_top').fadeOut()
        }
    });
    // top to back button end




});