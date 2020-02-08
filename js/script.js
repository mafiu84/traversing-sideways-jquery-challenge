
$(document).ready(function(){
    $("button").click(function(){
        $(this).next("p").slideToggle("slow");
    });

    //will display rgb value of selected panel in the reset panel
    $(".theButton").click(function(){
    var col = $(this).css('background-color');
    $('.superButton').text( col);
    });

});