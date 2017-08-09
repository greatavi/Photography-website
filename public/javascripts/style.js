/**
 * Created by z on 6/12/17.
 */
$(document).ready(function(){
    var carousel = $(".carousel").waterwheelCarousel({
        flankingItems: 3
    });
    $('#prev').bind('click',function(){
        carousel.prev();
        return false;
    });
    $('#next').bind('click',function(){
        carousel.next();
        return false;
    });
});
