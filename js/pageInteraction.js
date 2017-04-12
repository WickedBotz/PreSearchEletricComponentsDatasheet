/*
This file contains all functions that manipule all page interaction
*/

// Menu mobile interaction
var menuMb = {

  /*  toggleMenu();
  place a class that open menu mobile, where menuId be the menu's ID
   */
  toggleMenu : function(menuId) {

    var pageContainer = document.getElementById('pageContainer');

    if (isJquery(menuId)) {
      $(menuId).addClass('menu-open');
      $("#pageContainer").addClass('container-open');

      if (window.innerWidth > 768) {
        pageContainer.style.marginLeft = $(menuId).width() + "px";
      }

    } else {
      var menu = document.getElementById('menuMb');

      $(menu).addClass('menu-open');
      $("#pageContainer").addClass('container-open');

      if (window.innerWidth > 768) {
        pageContainer.style.marginLeft = $(menu).width() + "px";
      }

    }

  },

  /* closeMenu(menuId, menuOpenClass);

  menuId: Recebe um valor em string do nome da id. Pode ser tanto em sintax:
  'idMenu' ou '#idMenu'

  menuOpenClass: Recebe um valor em string referente ao nome da menu open and
  close Class
  */
  closeMenu : function(menuId, menuOpenClass) {

    var pageContainer = document.getElementById('pageContainer');

    if (isJquery(menuId)) {
      $(menuId).removeClass(menuOpenClass);
      $("#pageContainer").removeClass('container-open');
      pageContainer.style.marginLeft = "0px";
    } else {
      var menu = document.getElementById(menuId);
      $(menu).removeClass(menuOpenClass);
      $("#pageContainer").removeClass('container-open');
      pageContainer.style.marginLeft = "0px";
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
