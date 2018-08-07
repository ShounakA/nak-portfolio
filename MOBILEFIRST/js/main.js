jQuery(function(){
  var location;
  $('#view-work').on('click', function() {
    location = $('#About').position().top;
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
      location = $('#landing').position().top;
    }
    $('html, body').animate({scrollTop: location},900 );
  });

});
