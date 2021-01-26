$(document).ready(function(){
    let images = $(".image");
    images.mousedown(function() {  
        moveImage($(this));
    });
    function moveImage(mouseDownAt) {
        $(".gallery").bind('mousemove', function(e) {
            mouseDownAt.offset({top: e.pageY, left: e.pageX});
        });
    }  
    images.mouseup(function() {  
        $(".gallery").unbind('mousemove');   
    });
});