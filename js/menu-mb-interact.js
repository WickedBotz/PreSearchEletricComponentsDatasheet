/*
This file contains all functions that manipule menu mobile
*/

var menuMb = {

  toggleMenu : function() {

    var menu = document.getElementById('menuMb');
    var menuBtnIcon = document.getElementById('buttonFa');

    $(menu).toggleClass('menu-open');

    if ($(menuBtnIcon).hasClass('fa-bars')) {
      fadeThings.fadeElementOut('.brand-name', 432, 500);
    } else {
      fadeThings.fadeElementIn('.brand-name', 432, 500);
    }

  },

  /*
  menuId: Recebe um valor em string do nome da id. Pode ser tanto em sintax:
  'idMenu' ou '#idMenu'

  menuOpenClass: Recebe um valor em string referente ao nome da menu open and
  close Class
  */
  menuButtomClose : function(menuId, menuOpenClass) {

    if (menuId.charAt(0) === '#') {
      $(menuId).removeClass(menuOpenClass);
    } else {
      var menu = document.getElementById(menuId);
      $(menu).removeClass(menuOpenClass);
    }

  }

}
