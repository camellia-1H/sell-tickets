$(function () {
    // Mobile navbar button
    $('.mobile-menu_btn').click(showMobileNav);

    $('.mobile-menu-close_btn').click(hideMobileNav);
});

function showMobileNav(e) {
    $(e.currentTarget).hide();
    $('.mobile-menu-close_btn').show();
    $('.navbar').addClass('active');
}
function hideMobileNav(e) {
    $(e.currentTarget).hide();
    $('.mobile-menu_btn').show();
    $('.navbar').removeClass('active');
}

$('.list-film__container').slick({
    ifinity: true,
    arrows: true,
    autoplaySpeed: 1000,
    autoplay: true,
    slidesToShow: $(window).width() < 776 ? 3 : 5,
    slidesToScroll: 1,
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right'),
});

$(window).on('resize', function () {
    var win = $(this);
    if (win.width() < 767) {
        /* ... */
    }
    if (win.width() >= 1280) {
        /* ... */
    }
});
