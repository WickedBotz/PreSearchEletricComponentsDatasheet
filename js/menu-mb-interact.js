/*
  This file have all functions that manipule menu mobile
*/

var menuMb = {

  toggleMenu : function(button) {

    var menu = document.getElementById('menuMb');
    var pageContainer = document.getElementById('pageContainer');
    var pageFooter = document.getElementById('footer-container');
    var menuBtn = document.getElementById('buttonFa');

    $(menu).toggleClass('menu-open');
    $(pageContainer).toggleClass('page-container-menu');
    $(pageFooter).toggleClass('page-container-menu');

    if ($(menuBtn).hasClass('fa-bars')) {
      $(menuBtn).removeClass('fa-bars').addClass('fa-times');
    } else {
      $(menuBtn).removeClass('fa-times').addClass('fa-bars');
    }

  }


}
