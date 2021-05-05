$(function(){

  $('.bottom-slider__inner').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-arrow slick-prevs"><img src="images/arrow-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-nexts"><img src="images/arrow-right.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 1293,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 846,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 585,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });  
  
  $('.menu__btn').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active')
  })
});

$('.splide__arrow--prev').hover(
  function () { $('#change-prev-img').attr('src', './images/arrow-left-hover.svg'); },
  function () { $('#change-prev-img').attr('src', './images/arrow-left.svg'); }
);

$('.splide__arrow--next').hover(
  function () { $('#change-next-img').attr('src', './images/arrow-right-hover.svg'); },
  function () { $('#change-next-img').attr('src', './images/arrow-right.svg'); }
);