
$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });
    
    
    //add bootstrap's scrollspy
    $('body').scrollspy({
        target: '.navbar',
        offset: 160 // offset to match the menu shade navigation with the anchors on page, takes into factor the offset in smooth scrolling 
    });
    
    //smooth scrolling
    $('nav a, .down-button a').bind('click', function(){
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 100 //offset for menu to clear the anchor position
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    
    // parallax scrolling with stellar.js
    $(window).stellar();
    
    //initialize WOW for element animation
    new WOW().init();
});


