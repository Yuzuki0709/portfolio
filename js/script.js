$(function(){

    var window_h = $(window).height();
    $(".fadein").each(function(){
        $(this).addClass('visible');
    })

    $(".goSection").click(function(){
        console.log('hello');
        var adjust = 0;
        var speed = 400;
        var href = $(this).attr("href");

        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + adjust;

        $('body,html').animate({scrollTop:position},speed, 'swing');
        return false;
    });

});