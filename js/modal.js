/*
  This file contais all functions that use or manipule modals
*/

var modalController = {


  imgModal : function(img, modalImgId, figCaptionId, modal) {

    var modalImage = $(modalImgId);
    var figCaption = $(figCaptionId);

    modalController.setImgCaption(figCaption, img);
    modalController.setImgSrc(modalImage, img);

    $(modal).removeClass('hidden')

  },

  imgModalClose : function(modalId) {
    $(modalId).addClass('hidden');
  },

  setImgCaption : function(modalCaption, modalImage) {

    var caption = $(modalImage).attr('alt');
    $(modalCaption).html(caption);

  },

  setImgSrc : function(modalImage, contentImage) {

    var imgSrc = $(contentImage).attr('src');
    $(modalImage).attr('src', imgSrc);

  }


}
