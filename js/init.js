/*
  This file contains init functions, functions that executes on diferents
  events of html document. because of this, this will be the last script wich will be
  executed or called on html. This will need all script dependences.
*/

window.onload = function() {
  pageFix.adjustContentMargin();
};

window.resize = function() {
  pageFix.adjustContentMargin();
}
