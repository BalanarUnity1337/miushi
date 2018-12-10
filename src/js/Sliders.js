import $ from 'jquery';
import {
  Swiper,
  Navigation,
  Pagination,
  A11y
} from 'swiper/dist/js/swiper.esm.js';

Swiper.use([Navigation, Pagination, A11y]);

export default (function() {
  let Slider = new Swiper('.slider__inner', {
    speed: 400,
    containerModifierClass: 'slider__',
    wrapperClass: 'slider__slides',
    slideClass: 'slider__slide',
    slideActiveClass: 'slider__slide--active',
    slidePrevClass: 'slider__slide--prev',
    slideNextClass: 'slider__slide--next',
    loop: true,
    slideDuplicateClass: 'slider__slide-duplicate',
    slideDuplicateActiveClass: 'slider__slide-duplicate--active',
    slideDuplicatePrevClass: 'slider__slide-duplicate--prev',
    slideDuplicateNextClass: 'slider__slide-duplicate--next',
    navigation: {
      prevEl: '.slider__button--prev',
      nextEl: '.slider__button--next',
      disabledClass: 'slider__button--disabled'
    },
    pagination: {
      el: '.slider__pagination',
      type: 'bullets',
      clickable: true,
      bulletClass: 'slider__pagination-bullet',
      bulletActiveClass: 'slider__pagination-bullet--active',
      modifierClass: 'slider__pagination--',
      clickableClass: 'slider__pagination--clickable'
    },
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Это первый слайд',
      lastSlideMessage: 'Это последний слайд',
      paginationBulletMessage: 'Перейти к {{index}} слайду',
      notificationClass: 'slider__notification'
    }
  });

  let ProductsSlider = $('.products__slider').each(function() {
    var swiper = new Swiper($(this).children('.products__slider-inner')[0], {
      speed: 400,
      spaceBetween: 30,
      initialSlide: 1,
      width: 227,
      slidesOffsetBefore: 30,
      containerModifierClass: 'products__slider-',
      wrapperClass: 'products__items',
      slideClass: 'product',
      slideActiveClass: 'product--active',
      slidePrevClass: 'product--prev',
      slideNextClass: 'product--next',
      // loop: true,
      slideDuplicateClass: 'product-duplicate',
      slideDuplicateActiveClass: 'product-duplicate--active',
      slideDuplicatePrevClass: 'product-duplicate--prev',
      slideDuplicateNextClass: 'product-duplicate--next',
      navigation: {
        prevEl: this.querySelector('.products__slider-button--prev'),
        nextEl: this.querySelector('.products__slider-button--next'),
        disabledClass: 'products__slider-button--disabled'
      },
      pagination: {
        el: this.querySelector('.products__slider-pagination'),
        type: 'bullets',
        clickable: true,
        bulletClass: 'products__slider-pagination-bullet',
        bulletActiveClass: 'products__slider-pagination-bullet--active',
        modifierClass: 'products__slider-pagination--',
        clickableClass: 'products__slider-pagination--clickable'
      },
      a11y: {
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд',
        firstSlideMessage: 'Это первый слайд',
        lastSlideMessage: 'Это последний слайд',
        paginationBulletMessage: 'Перейти к {{index}} слайду',
        notificationClass: 'slider__notification'
      },
      breakpointsInverse: true,
      breakpoints: {
        750: {
          width: 720,
          initialSlide: 0,
          // spaceBetween: 0,
          slidesOffsetBefore: 0,
          slidesPerView: 3,
          slidesPerGroup: 3
        },

        1170: {
          width: 1140,
          initialSlide: 0,
          slidesOffsetBefore: 0,
          slidesPerView: 4,
          slidesPerGroup: 4
        }
      }
    });
  });
})();
