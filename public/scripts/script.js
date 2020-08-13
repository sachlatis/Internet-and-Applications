function scrollFunction() {
  /**
   *Check what position on the page the scrollbar is, so that no-shadow class is only applied while
   * the navbar is above the header container, but navbar has a bottom shadow after that
   */
  if ($(document).scrollTop() < 548) {
    $('.navbar-fixed nav').addClass('no-shadow');
  } else {
    $('.navbar-fixed nav').removeClass('no-shadow');
  }
}

$(function() {
  $('.sidenav').sidenav();
  window.onscroll = function() {
    scrollFunction();
  };
});
