/*
  This file have all functions that manipule menu mobile
*/

var menuMb = {

  toggleMenu : function(button) {

    var menu = document.getElementById('menuMb');
    var pageContainer = document.getElementById('pageContainer');
    var pageFooter = document.getElementById('footer-container');

    $(menu).toggleClass('menu-open');
    $(pageContainer).toggleClass('page-container-menu');
    $(pageFooter).toggleClass('page-container-menu');

  }


}
