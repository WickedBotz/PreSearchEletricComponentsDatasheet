/*
  This file contains init functions, functions that executes on diferents
  events of html document. because of this, this will be the last script wich will be
  executed or called on html. This will need all script dependences.
*/

//---- elevateZoom init ---///
$(".img-rounded").elevateZoom();




// - - - - - - Global Vars - - - - - -//

// Reference to the last scroll value
var lastScrollValue = window.pageYOffset;

// - - - - - - Global Vars - - - - - -//







/* Margin definitions before page loads */
$(document).ready(function() {
  pageFix.adjustContentMargin();
});







/* Adjust the main content margin left according menu mobile width while risizing */
// $(window).resize(function() {
//   if ($("#menuMb").hasClass('menu-open')) {
//     pageFix.adjustMainContentMarginLeft('pageContainer', 'menuMb');
//   }
// });







/* Menu mobile interaction - Show Menu */
$('#menu-mb-button').click(function() {
  menuMb.toggleMenu('menuMb');
});







/* Menu mobile buttom close interaction - close Menu */
$('#closeButtom').click(function() {
  menuMb.closeMenu('#menuMb', 'menu-open');
});







/* Navbar scroll interaction */
$(window).scroll(function() {
  toggleThings.navbarFadeInOut('navContainer');
});







/* Menu mobile buttom close interaction - close Menu */
$('.menu-mb-section-container a').click(function(event) {

  scrollInteraction.scrollGoesInteraction(this, 1000);
  menuMb.closeMenu('#menuMb', 'menu-open');

  event.preventDefault();
});







/* Image modal, thats show it on image click */
$('img').click(function() {
  modalController.imgModalController.imgModal(this, '#modalImage', '#figCaption', '#imageModalContainer');
});







/* Close modal when click in all modal-image-container area */
$('#imageModalContainer').click(function() {
  modalController.imgModalController.imgModalClose(this);
});







/* Functions that copy all highlighted text */
$(".clipboard-copy").click(function() {
  var target = document.querySelector(this.dataset.target);

  try {
    document.execCommand('copy');
  } catch (err) {
    alert("The copy function is not enable on your browser");
  }

});
