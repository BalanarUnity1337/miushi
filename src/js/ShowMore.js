import $ from 'jquery';

export default (function() {
  $('.js-show-more').one('click', function() {
    $(this).addClass('active');
  });

  $(window).resize(function() {
    if ($(this).outerWidth() >= 750) {
      $('.js-show-more').addClass('active');
    }
  });

  $(window).trigger('resize');
})();
