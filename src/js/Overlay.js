import $ from 'jquery';

export default (function() {
  const $overlay = $('.overlay');
  let onCloseOverlay = null;

  $overlay.on('click', function() {
    closeOverlay();
  });

  function showOverlay(callback) {
    $overlay.addClass('overlay--visible');

    onCloseOverlay = callback;
  }

  function closeOverlay() {
    $overlay.removeClass('overlay--visible');

    if (typeof onCloseOverlay === 'function') {
      onCloseOverlay();
    }
  }

  return {
    show: onCloseOverlay => showOverlay(onCloseOverlay),
    close: closeOverlay
  };
})();
