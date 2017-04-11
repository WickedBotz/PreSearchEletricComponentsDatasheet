/*
This file contains all functions that manipule all page interaction
*/

// Menu mobile interaction
var menuMb = {

  /*  toggleMenu();
  place a class that open menu mobile, where menuId be the menu's ID
   */
  toggleMenu : function(menuId) {

    if (isJquery(menuId)) {
      $(menuId).addClass('menu-open');

    } else {
      var menu = document.getElementById('menuMb');
      $(menu).addClass('menu-open');

    }

  },

  /* closeMenu(menuId, menuOpenClass);

  menuId: Recebe um valor em string do nome da id. Pode ser tanto em sintax:
  'idMenu' ou '#idMenu'

  menuOpenClass: Recebe um valor em string referente ao nome da menu open and
  close Class
  */
  closeMenu : function(menuId, menuOpenClass) {

    if (isJquery(menuId)) {
      $(menuId).removeClass(menuOpenClass);
    } else {
      var menu = document.getElementById(menuId);
      $(menu).removeClass(menuOpenClass);
    }

  }

}

// Gradual Scroll interaction
var scrollInteraction = {

  /* scrollGoesInteraction(elementReference);
  this functions makes scroll animated, where elementReference is the element that
  was clicked or interaged
  */
  scrollGoesInteraction : function(elementReference, animatedTime) {

    $('html, body').animate( {
      scrollTop: $($(elementReference).attr('href')).offset().top
    }, animatedTime);


  }

}
