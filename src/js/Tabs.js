import $ from 'jquery';

export default (function() {
  $('.js-tab').click(function(e) {
    e.preventDefault();

    $(this)
      .addClass('active')
      .siblings()
      .removeClass('active')
      .parent()
      .siblings()
      .removeClass('active products__slider--show')
      .siblings(this.hash)
      .addClass('active products__slider--show');
  });
})();
