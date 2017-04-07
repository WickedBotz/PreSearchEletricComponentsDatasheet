/*
  This file contains init functions, functions that executes on diferents
  events of html document. because of this, this will be the last script wich will be
  executed or called on html. This will need all script dependences.
*/

// - - - - - - Global Vars - - - - - -//

var lastScrollValue = window.pageYOffset;

// - - - - - - Global Vars - - - - - -//

/* Margin definitions before page loads */
window.onload = function() {
  pageFix.adjustContentMargin();
};

/* Margin definitions while page resize */
window.resize = function() {
  pageFix.adjustContentMargin();
}

/* Menu mobile interaction - Menu Toggle */
$('#menu-mb-button').click(function() {
  menuMb.toggleMenu()
});

$('#closeButtom').click(function() {
  menuMb.menuButtomClose('#menuMb', 'menu-open');
});

$(window).scroll(function() {
  fadeThings.navbarFadeInOut('navContainer');
});
