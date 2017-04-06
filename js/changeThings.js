/*
  This file contains all functions that change things by other things
*/

var changeThings = {

  /* changeIcon(elWithClass, classIcon1, classIcon2);

    This function change between two class, setting the class according with the actual
    class of element elWithClass

    classIcon1 and classIcon2 are string arguments, and receive a string name of
    both class: class1 and class2. they don't need to be writen with start dot

  */
  changeIcon : function(elWithClass, classIcon1, classIcon2) {

    if ($(elWithClass).hasClass(classIcon1)) {
      $(elWithClass).removeClass(classIcon1).addClass(classIcon2);

    } else {
      $(elWithClass).removeClass(classIcon2).addClass(classIcon1);

    }

  }

}
