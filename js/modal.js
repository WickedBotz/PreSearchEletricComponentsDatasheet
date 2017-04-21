/*
This file contais all functions that use or manipule modals
*/

/* This object contains all functions to control every types of modals */
var modalController = {


  /*
  This object controll all image modals, that are showd on image click
  */
  imgModalController : new Object({

    /*

    This function show the image modal, and call some functions to set
    modal image source and figCaption

    [ Variables ]:
    - img: The clicked image
    - modalImgId: id of img inside to modal
    - figCaptionId: id of figCaption inside the modal
    - modal: id of modal container

    */
    imgModal : function(img, modalImgId, figCaptionId, modal) {

      modalController.imgModalController.setImgSrc(modalImgId, img);
      modalController.imgModalController.setImgCaption(figCaptionId, img);

      $(modal).removeClass('hidden');

    },




    // Function to close modal - modalId: Id of modal container
    imgModalClose : function(modalId) {
      $(modalId).addClass('hidden');
    },






    /*
    Defines de figcaption of the image inside modal

    [ Variables ]:
    - modalCaption: The id or Object of figcaption inside modal
    - modalImgId: Id or Object of image inside modal
    - caption: get the alt value of figcaption

    */
    setImgCaption : function(modalCaption, modalImgId) {

      var caption = $(modalImgId).attr('alt');
      $(modalCaption).html(caption);

    },







    /*
    Defines de source of the image insiede modal

    [ Variables ]:
    - modalImgId: The id or Object of image inside modal
    - sourceImage: Id or Object of clicked source image
    - imgSrc: get the src value of image

    */
    setImgSrc : function(modalImgId, sourceImage) {

      var imgSrc = $(sourceImage).attr('src');
      $(modalImgId).attr('src', imgSrc);

    }

  })

};
