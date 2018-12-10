import $ from 'jquery';

export default (function () {
  $('.js-show-more').one('click', function () {
    const parent = $(this).parents('.features__item--show-more');

    if (parent.length > 0) {
      parent.addClass('active');
    } else {
      $(this).addClass('active');
    }
  });

  $(window).resize(function () {
    if ($(this).outerWidth() >= 750) {
      $('.js-show-more').addClass('active').parents('.features__item--show-more').addClass('active');
    }
  });

  $(window).trigger('resize');
})();
