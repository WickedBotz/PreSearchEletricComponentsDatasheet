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

/* Menu mobile interaction - Show Menu */
$('#menu-mb-button').click(function() {
  menuMb.toggleMenu()
});

/* Menu mobile buttom close interaction - close Menu */
$('#closeButtom').click(function() {
  menuMb.menuButtomClose('#menuMb', 'menu-open');
});

/* Navbar scroll interaction */
$(window).scroll(function() {
  toggleThings.navbarFadeInOut('navContainer');
});
