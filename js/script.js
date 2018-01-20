jQuery(document).ready(function($){
    $( ".nav-item" ).click(function(e) {
        e.preventDefault();
        console.log( $(this).find('a').attr('href'));
        $('html').animate({
            scrollTop: $( $(this).find('a').attr('href') ).offset().top
        }, 1000);
     });

     var nav = $('.menu');
     $(window).scroll(function () {
        if ($(this).scrollTop() > 260) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });
  });