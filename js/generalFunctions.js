
/*
  This file have all general functions that are not objects
*/
function isJquery(elementId) {
  var isJquery = false;

  if (elementId.charAt(0) === '#') {
    isJquery = true;
  }

  return isJquery;

}
