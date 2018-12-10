import $ from 'jquery';
import overlay from './Overlay.js';

export default (function() {
  const $hamburger = $('.js-hamburger');
  const $sideMenu = $('.js-side-menu');
  const $sideMenuClose = $('.js-side-menu-close');

  // open menu
  $hamburger.on('click', openMenu);

  // close menu
  $sideMenuClose.on('click', closeMenu);

  //
  $(window).resize(function() {
    if ($(this).outerWidth() >= 1170) {
      overlay.close();
    } else if ($sideMenu.hasClass('page-header__side-menu--visible')) {
      overlay.show();
    }
  });

  function openMenu() {
    $hamburger.addClass('is-active').prop('disabled', true);

    overlay.show(onCloseMenu);

    $sideMenu.addClass(
      'page-header__side-menu--slide-in page-header__side-menu--visible'
    );

    $sideMenu.on('animationend', function() {
      $sideMenu.removeClass('page-header__side-menu--slide-in');
      $sideMenu.off('animationend');
    });
  }

  function closeMenu() {
    $sideMenu.addClass('page-header__side-menu--slide-out');

    overlay.close();

    $sideMenu.on('animationend', function() {
      $sideMenu.removeClass(
        'page-header__side-menu--slide-out page-header__side-menu--visible'
      );
      $sideMenu.off('animationend');
      $hamburger.removeClass('is-active').prop('disabled', false);
    });
  }

  function onCloseMenu() {
    $sideMenu.addClass('page-header__side-menu--slide-out');

    $sideMenu.on('animationend', function() {
      $sideMenu.removeClass(
        'page-header__side-menu--slide-out page-header__side-menu--visible'
      );
      $sideMenu.off('animationend');
      $hamburger.removeClass('is-active').prop('disabled', false);
    });
  }
})();
