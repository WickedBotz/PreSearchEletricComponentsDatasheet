// // // // // // // // // // // // // // // // // // // // // // // // // // // // //
//  This file contains functions that fix html document and every element inside.   //
//  All functions will be defines inside the pageFix object and called by it        //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // //


//  Page fix object. This object have methods to fix some page contents, to make
//  the page more interactive and responsive
var pageFix = {

  /*  pageFix.adjustContentMargin():

      Description: Adjust the margin of page container. This is the
      margin that allows footer to be viewed

     - var pageContainer: Page container reference, that include all middle page content.
     - var footerContainer: footer container reference, that contains all footer content.
     - var height: get the footer container height to set this value as page container margin.

  */
  adjustContentMargin : function() {
    var pageContainer = document.getElementById('pageContainer');
    var footerContainer = document.getElementById('footer-container');

    var height = footerContainer.clientHeight;

    pageContainer.style.marginBottom = height + "px";
  }

}
