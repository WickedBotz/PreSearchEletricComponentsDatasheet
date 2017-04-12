
/*
This file have all general functions that are not objects
*/

/*
Verify if the ID param is jquery type and return true or false
*/
function isJquery(elementId) {
  var isJquery = false;

  if (elementId.charAt(0) === '#') {
    isJquery = true;
  }

  return isJquery;
}
