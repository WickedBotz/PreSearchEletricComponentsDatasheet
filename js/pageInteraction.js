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
  this functions makes gradual scroll that goes to target element referenced on
  "href" element atribute.

  [ Variables ]:
  - ElementReference: Is the element that was clicked or interaged.
  - navbarHeight: Value ov navbar height to adjust the scroll perfectly
  - goes: the scrollTop goes value
  - animationdTime: Time of gradual scroll animation

  */
  scrollGoesInteraction : function(elementReference, animationdTime) {
    var navbarHeight = 40;
    var goes = $($(elementReference).attr('href')).offset().top - navbarHeight;

    $('html, body').animate( {
      scrollTop: goes
    }, animationdTime);


  }

}
