$(document).ready(function() {

    // Execute when on mobile device
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {

      $('.fade').css('opacity', '100'); // No fade in animation

      // If user touches shield in row 1, display info
      $('#row1 .flag').click(function() {

        var orig_id = $(this).attr('id');

        $('#row1 .flag').each(function() {
          if (orig_id != $(this).attr('id')) {
            var temp = '#row1box ' + '#' + $(this).attr('id');
            $(temp).css('display', 'none');
          }
        });

        var temp = '#row1box ' + '#' + orig_id;

        if ($(temp).css('display') === 'block') {
          $(temp).css('display', 'none');
        } else {
          $(temp).css('display', 'block');
        }

      });

      // If user touches shield in row 2, display info
      $('#row2 .flag').click(function() {

        var orig_id = $(this).attr('id');

        $('#row2 .flag').each(function() {
          if (orig_id != $(this).attr('id')) {
            var temp = '#row2box ' + '#' + $(this).attr('id');
            $(temp).css('display', 'none');
          }
        });

        var temp = '#row2box ' + '#' + orig_id;

        if ($(temp).css('display') === 'block') {
          $(temp).css('display', 'none');
        } else {
          $(temp).css('display', 'block');
        }

      });

    } else {

      // If mouse hovers over a shield in row 1, display info
      $('#row1 .flag').hover(function() {
        var temp = '#row1box ' + '#' + $(this).attr('id');
        $(temp).css('display', 'block');
      }, function() {
        var temp = '#row1box ' + '#' + $(this).attr('id');
        $(temp).css('display', 'none');
      });

      // If mouse hovers over a sheild in row 2, display info
      $('#row2 .flag').hover(function() {
        var temp = '#row2box ' + '#' + $(this).attr('id');
        $(temp).css('display', 'block');
      }, function() {
        var temp = '#row2box ' + '#' + $(this).attr('id');
        $(temp).css('display', 'none');
      });

      // Every time the window is scrolled
      $(window).scroll( function(){

          // Check the location of each desired element
          $('.fade').each( function(i){

            var h = window.innerHeight / 2;

            // Fade text in or out once scrolling at certain position
            if (($(this).offset().top - $(window).scrollTop()) < h) {
              $(this).stop().fadeTo(100, 1);
            } else {
              $(this).stop().fadeTo(100, 0);
            }

          });
      });
    }
});
