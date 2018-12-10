import $ from 'jquery';

export default (function() {
  const pageFooterBlockTitle = $('.page-footer__block-title');

  pageFooterBlockTitle.click(function() {
    $(this)
      .toggleClass('active')
      .next()
      .slideToggle(700);
  });

  $(window).resize(function() {
    if ($(this).outerWidth() >= 1170) {
      pageFooterBlockTitle.next().removeAttr('style');
    }
  });
})();
