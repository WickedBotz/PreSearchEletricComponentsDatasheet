/*
  This file contains functions that fix html document and every element inside.
  All functions will be defines inside the pageFix object and called by it
*/

var pageFix = {

  adjustContentMargin : function() {
    var pageContainer = document.getElementById('pageContainer');
    var footerContainer = document.getElementById('footer-container');

    var height = footerContainer.clientHeight;

    pageContainer.style.marginBottom = height + "px";
  }


}
