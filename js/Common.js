﻿//"use strict"; 
$(window).load(() => {
    /*Phần khung ảnh*/
    LoadImage();

    $('.owl-carousel').on('changed.owl.carousel',
        (event) => {
            $(this).find('img').lazy({
                effect: "fadeIn",
                effectTime: 0
            });
        });
});
function owlslide(num, margin, autoplay, dot, nav, items, animateIn, animateOut) {
    var option = {
        items: num,
        autoplay: num > items[0] ? autoplay : false,
        autoplayTimeout: 5000,
        smartSpeed: 1500,
        loop: num > 1,
        nav: num > items[0] ? nav : false,
        dots: num > items[0] ? dot : false,
        autoplayHoverPause: true,
        margin: margin[0],
        lazyLoad: true,
        navText: [''],
        animateIn: animateIn,
        animateOut: animateOut,
        responsive: {
            0: {
                items: items[4],
                margin: margin[4],
                autoplay: num > items[4] ? autoplay : false,
                nav: num > items[4] ? nav : false,
                dots: num > items[4] ? dot : false,
            },
            479: {
                items: items[3],
                margin: margin[3],
                autoplay: num > items[3] ? autoplay : false,
                nav: num > items[3] ? nav : false,
                dots: num > items[3] ? dot : false,
            },
            767: {
                items: items[2],
                margin: margin[2],
                autoplay: num > items[2] ? autoplay : false,
                nav: num > items[2] ? nav : false,
                dots: num > items[2] ? dot : false,
            },
            991: {
                items: items[1],
                margin: margin[1],
                autoplay: num > items[1] ? autoplay : false,
                nav: num > items[1] ? nav : false,
                dots: num > items[1] ? dot : false,
            },
            1199: {
                items: items[0],
                margin: margin[0],
                autoplay: num > items[0] ? autoplay : false,
                nav: num > items[0] ? nav : false,
                dots: num > items[0] ? dot : false,
            }
        }
    }
    return option;
}
function LoadImage() {
    $("img").lazy({
        effect: "fadeIn",
        effectTime: 1000
    });
}
function scrollHead(event) {
    event.preventDefault();
    $('body,html').animate({ scrollTop: 0 }, 1600);
}

$(document).ready(() => {
    $('#bttop').click(function (e) {
        scrollHead(e);
    });
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 400) {
            $('#bttop').addClass("active");
        } else {
            $('#bttop').removeClass("active");
        }
    });
    $('.openList').click(() => {
        $('#menu').toggleClass('ac');
        $('.openList').toggleClass('ac');
        $('#overlay').fadeToggle();
    });
    $('#overlay').click(function () {
        $('#menu').toggleClass('ac');
        $('.openList').toggleClass('ac');
        $('#overlay').fadeToggle();
    });
    $('.openSub').click(function () {
        $(this).next('ul').slideToggle();
        $(this).toggleClass('ac');
        $(this).parents('li').toggleClass('ac');
    });
    $('.btnToggle').click(function () {
        $(this).toggleClass("ac");
        $(this).parent('.group').find('.detail').toggleClass("ac").slideToggle();
    });
    $('html').on('click', ".tabs .tab-links a",
        function (e) {
            var currentAttrValue = $(this).attr('href');
            $('.tabs ' + currentAttrValue).addClass("active").siblings().removeClass("active");
            $(this).parent('li').addClass('active').siblings().removeClass('active');
            e.preventDefault();
        });
    $(".marquee").marquee({ duration: 20000, gap: 20, delayBeforeStart: 0, direction: "left", duplicated: true, pauseOnHover: true });

    $("#notifyRight .list").marquee({ duration: 20000, gap: 0, delayBeforeStart: 1000, direction: "up", duplicated: true, pauseOnHover: true, startVisible: true });

    $("#categoryRight ul li p span").click(function () {
        var $ul = $(this).parents("p").next("ul");
        $ul.slideToggle();
        $(this).toggleClass("active");
    });

    $("#linkWebsite select").change(function () {
        var value = $(this).val();
        if (value !== "") window.open(value, '_blank');
    });

    $('#photoAlbumRight .group').each(function () {
        $(this).owlCarousel(owlslide($(this).find('>*').size(), [10, 10, 10, 10, 10, 10], true, true, true, [1, 4, 3, 2, 1], "", ""));
    });
    $('#newsHot .slideNews').each(function () {
        $(this).owlCarousel(owlslide($(this).find('>*').size(), [10, 10, 30, 20, 10, 10], true, true, true, [1, 1, 2, 2, 1], "", ""));
    });
    $('.otherNews .group').each(function () {
        $(this).owlCarousel(owlslide($(this).find('>*').size(), [50, 50, 20, 20, 10, 10], true, true, true, [3, 3, 2, 2, 1], "", ""));
    });

    $('.newsInfomation .group').each(function () {
        $(this).owlCarousel(owlslide($(this).find('>*').size(), [30, 30, 30, 25, 10, 10], true, true, true, [3, 3, 3, 2, 1], "", ""));
    });
});

var size = parseInt($(".noidung").css("font-size")),
    lineheight = parseInt($(".noidung").css("line-height"));
size || (size = 16);
lineheight || (lineheight = 24);

function Increasenoidung() {
    size++;
    lineheight += 2;
    $(".noidung").css("cssText", "font-size:" + size + "px !important; line-height:" + lineheight + "px !important");
    $(".noidung").find("*").css("cssText",
        "font-size:" + size + "px !important; line-height:" + lineheight + "px !important");
}

function Decreasenoidung() {
    size--;
    lineheight -= 2;
    $(".noidung").css("cssText", "font-size:" + size + "px !important; line-height:" + lineheight + "px !important");
    $(".noidung").find("*").css("cssText",
        "font-size:" + size + "px !important; line-height:" + lineheight + "px !important");
}

function Resetnoidung() {
    size = 16;
    lineheight = 24;
    $(".noidung").css("cssText", "font-size:" + size + "px !important; line-height:" + lineheight + "px !important");
    $(".noidung").find("*").css("cssText",
        "font-size:" + size + "px !important; line-height:" + lineheight + "px !important");
}

function scrollHead(event) {
    event.preventDefault();
    $('body,html').animate({ scrollTop: 0 }, 0);
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

