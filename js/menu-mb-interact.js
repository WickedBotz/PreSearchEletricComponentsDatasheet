/*
  This file contains all functions that manipule menu mobile
*/

var menuMb = {

  toggleMenu : function(button) {

    var menu = document.getElementById('menuMb');
    var menuBtn = document.getElementById('menu-mb-button');
    var menuBtnIcon = document.getElementById('buttonFa');

    $(menu).toggleClass('menu-open');
    $(menuBtn).toggleClass('menu-mb-button-open');

    if ($(menuBtnIcon).hasClass('fa-bars')) {
      fadeThings.fadeElementOut('.brand-name', 432, 500);
    } else {
      fadeThings.fadeElementIn('.brand-name', 432, 500);
    }

    changeThings.changeIcon(menuBtnIcon, 'fa-bars', 'fa-times');

  }

}
