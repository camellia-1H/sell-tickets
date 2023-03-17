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

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6b44941691mshf4c5c8b63ac4464p12ac97jsnd757cb99e014',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
    },
};

fetch('https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids?idsList=tt0001702%2Ctt0001856%2Ctt0001856', options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
