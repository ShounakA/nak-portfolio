var places = ["#About", "#Projects", "#landing"];
var count=0;
jQuery(function(){
  var location;
  $('#view-work').on('click', function() {
    location = $(places[count]).position().top;
    $('html, body').animate({scrollTop: location},900 );
    count++;
    if (count>2){
      count=0;
    }
  });


});
