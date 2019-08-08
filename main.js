$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
   console.log("document is ready");
     
   
     $( ".project" ).click(
     function() {
       $(this).addClass('shadow-lg','project-open').css('cursor', 'pointer'); 
       console.log('dont');
     }, function() {
       $(this).removeClass('shadow-lg','project-open');
     }
     });
  //  $( ".card" ).touch(
  //   function() {
  //     $(this).addClass('shadow-lg').css('cursor', 'pointer'); 
  //   }, function() {
  //     $(this).removeClass('shadow-lg');
  //   }
  // );
     
   // document ready  
   });
 