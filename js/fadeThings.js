/*
  This file contains all functions that fade things
*/

var fadeThings = {
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
  */
  fadeElementOut : function(elementLabel, maxWidth, interval) {

    if ($(window).width() < maxWidth) {
      $(elementLabel).fadeOut(interval);
    }

  }
}
