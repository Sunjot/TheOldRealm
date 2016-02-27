$(document).ready(function() {


    $('#row1 .flag').hover(function() {
      var temp = '#row1box ' + '#' + $(this).attr('id');
      $(temp).css('display', 'block');
    }, function() {
      var temp = '#row1box ' + '#' + $(this).attr('id');
      $(temp).css('display', 'none');
    });

    $('#row2 .flag').hover(function() {
      var temp = '#row2box ' + '#' + $(this).attr('id');
      $(temp).css('display', 'block');
    }, function() {
      var temp = '#row2box ' + '#' + $(this).attr('id');
      $(temp).css('display', 'none');
    });

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.fade').each( function(i){

          var h = window.innerHeight / 2;


          if (($(this).offset().top - $(window).scrollTop()) < h) {
            $(this).stop().fadeTo(100, 1);
          } else {
            $(this).stop().fadeTo(100, 0);
          }

        });

    });

});
