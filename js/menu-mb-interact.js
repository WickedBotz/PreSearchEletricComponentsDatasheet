/*
  This file have all functions that manipule menu mobile
*/

var menuMb = {

  toggleMenu : function(button) {

    var menu = document.getElementById('menuMb');
    var menuBtn = document.getElementById('buttonFa');

    $(menu).toggleClass('menu-open');
    $(menuBtn).toggleClass('menu-mb-button-open');

    if ($(menuBtn).hasClass('fa-bars')) {
      $(menuBtn).removeClass('fa-bars').addClass('fa-times');
    } else {
      $(menuBtn).removeClass('fa-times').addClass('fa-bars');
    }

  }


}
