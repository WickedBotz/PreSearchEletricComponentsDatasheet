/*
This file contains all functions that fade things
*/

var toggleThings = {
  /*  fadeElementIn(elementLabel, maxWidth, interval):

  This function verify the window width and compare with maxWidth.
  if true, the element will be showed.

  The elementLabel receive a string of class, id or element name. Follow above
  the sintax for this variable:
  - ID: "#idName"
  - Class: ".className"
  - Tag: "tagName"
  - Element Object: HTML object
  */
  fadeElementIn : function(elementLabel, maxWidth, interval) {

    if ($(window).width() < maxWidth) {
      $(elementLabel).fadeIn(interval);
    }

  },

  /*  fadeElementOut(elementLabel, maxWidth, interval):

  This function verify the window width and compare with maxWidth.
  if true, the element will be faded

  The elementLabel receive a string of class, id or element name. Follow above
  the sintax for this variable:
  - ID: "#idName"
  - Class: ".className"
  - Tag: "tagName"
  - Element Object: HTML object
  */
  fadeElementOut : function(elementLabel, maxWidth, interval) {

    if ($(window).width() < maxWidth) {
      $(elementLabel).fadeOut(interval);
    }

  },

  /* navbarFadeInOut(navbarId);
  This function pull navbar up or down according to page scrolling
  */
  navbarFadeInOut: function(navbarId) {

    var currentScroll = window.pageYOffset;

    if (navbarId.charAt(0) === '#') {

      if (lastScrollValue >= currentScroll) {
        $(navbarId).removeClass('nav-bar-offpage');

      } else {
        $(navbarId).addClass('nav-bar-offpage');

      }

    } else {
      var navbar = document.getElementById(navbarId);

      if (lastScrollValue >= currentScroll) {
        $(navbar).removeClass('nav-bar-offpage');

      } else {
        $(navbar).addClass('nav-bar-offpage');

      }

    }

    lastScrollValue = currentScroll;

  },

  /* toggleCode(codeId)

  */
  toggleCode : function(codeId) {

    if (codeId.charAt(0) === '#') {
      $(codeId).toggleClass('code-hidden');

    } else {
      var code = document.getElementById(codeId);
      $(code).toggleClass('code-hidden');

    }

  }


}
