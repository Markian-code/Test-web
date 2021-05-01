$(function(){

  $('.bottom-slider__inner').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-arrow slick-prevs"><img src="images/arrow-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-nexts"><img src="images/arrow-right.png" alt=""></button>'
  });          
});

$('.splide__arrow--prev').hover(
  function () { $('#change-prev-img').attr('src', './images/arrow-left-hover.svg'); },
  function () { $('#change-prev-img').attr('src', './images/arrow-left.svg'); }
);

$('.splide__arrow--next').hover(
  function () { $('#change-next-img').attr('src', './images/arrow-right-hover.svg'); },
  function () { $('#change-next-img').attr('src', './images/arrow-right.svg'); }
);