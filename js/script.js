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
