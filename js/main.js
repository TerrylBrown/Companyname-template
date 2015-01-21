// Nav

$(function() {

  var $navBtn = $('.nav-toggle');
  var $navMenu = $('.site-nav')

  $navBtn.click(function(evt) {

    if ( $navMenu.is(':visible') ) {
      $navMenu.slideUp();
    } else {
      $navMenu.slideDown();
    }

    evt.preventDefault();
  });

});