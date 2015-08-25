$(document).ready(function() {   
	//  sidebar toggle
    var sideslider = $('[data-toggle=collapse-side]');
    var sel = sideslider.attr('data-target');
    var sel2 = sideslider.attr('data-target-2');
    sideslider.click(function(event){
        $(sel).toggleClass('in');
        $(sel2).toggleClass('out');
    });
    // ends

    // hamburger script
    var trigger = $('.hamburger'),
      overlay = $('.h-overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
  // ends

  //body scroll disable on side menu open
  $('.hamburger').on('click', function(){
    if($('.hamburger').hasClass('is-closed')){
      $(this).parents('body, html').css({"overflow-y":"visible"});
    }else{
      $(this).parents('body, html').css({"overflow-y":"hidden"});
    }
  });

  // custom dropdown script multiple
  $('.dropdown-select').on( 'click', '.dropdown-menu li a', function() { 
    var target = $(this).html();
     //Adds active class to selected item
     $(this).parents('.dropdown-menu').find('li').removeClass('active');
     $(this).parent('li').addClass('active');
     //Displays selected text on dropdown-toggle button
     $(this).parents('.dropdown-select').find('.dropdown-toggle').html('<span class="pull-left">' + target + '</span>' + '<span class="caret pull-right"><svg><use xlink:href="../images/profile_images/svg-icon.svg#icon-down"></use></svg></span>');
  });//end

  // login and register modal script
  $('.modal').on('click', '.modal-footer #not-member', function(){
      $('#loginModal').modal('hide');
      $('#loginModal').parents('body').css({'overflow':'hidden'});
  }); //end 

  $('.modal').on('click', '.modal-footer #already-member', function(){
    if($('.modal').hasClass('in')){
      $('#loginModal').modal('show');
      $('#registerModal').modal('hide');
      $('#registerModal').parents('body').css({'overflow':'hidden'});
    }else{
      $('#loginModal').modal('hide');
      $('#registerModal').modal('show');
    }
  }); //end 

  if($('#registerModal').hasClass('in')){
    }else{
      // $(this).parents('body').removeClass('modal-open');
    }


    //fullscreen modal body scroll enabled
    // $("#menuModal").on("show", function () {
    //   $("body").removeClass("modal-open");
    // });
  $('#menuModal').modal('hide').parents('body').removeClass('modal-open');
});


// fade animation for elements on scroll
var header = $('.fadeElem');
var range = 800;
$(window).on('scroll', function () {
    var st = $(this).scrollTop();
    header.each(function () {
        var offset = $(this).offset().top;
        var height = $(this).outerHeight();
        offset = offset + height / 2;
        $(this).css({ 'opacity': 1.6 - (st - offset + range) / range });
    });
});


// $(document).on('click', function(){
//   $('.navbar-inverse.side-collapse').addClass('in');
//   $('.side-collapse-container').removeClass('out');
//   $('.hamburger').addClass('is-open');
// })