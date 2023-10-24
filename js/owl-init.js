var owl = $('.owl-carousel-hero');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    dots: true,
    autoHeightClass: 'owl-height'
});

var owlShopItems = $('.owl-carousel-shop-items');
owlShopItems.owlCarousel({
    items: 3,
    loop:true,
    margin: 1,
    autoplay:true,
    autoplayTimeout: 4000,
    dots: true,
});