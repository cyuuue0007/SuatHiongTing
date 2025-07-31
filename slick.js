//輪播
$('.multiple-items').slick({
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    autoplay: true,
    dots: true,
    autoplaySpeed: 2000,
    speed: 1500,
    cssEase: 'ease-in-out',
    customPaging: function (slider, i) {
        return '<span class="slick-dot-indicator"></span>';
    },
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});