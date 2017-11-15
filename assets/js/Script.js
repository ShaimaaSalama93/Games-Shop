$(document).ready(function() {
    /**************Toggle Menu*************/
    /*toggle icon*/
    $('.load').hide();
    $('.togclick').click( function(){
        $(".load").animate({
            width: "toggle",
            duration: 50
        });
    });
    /*Head Part click*/
    $('.load a').click( function(){
        $(".load").animate({
            width: "toggle",
            duration: 50
        });
    });

    /**************Search*************/
    /*toggle icon*/
    $('.Search').hide();
    $('.Search-Icon').click( function(){
        $(".Search-Icon").animate({
            width: "toggle",
            duration: 50
        });
        $(".Search").animate({
            width: "toggle",
            duration: 50
        });

    });


    /************Slider****************/
    $('#myCarousel').carousel({
        interval: 3000
    })

    /************Category Slider****************/
    $('#Carousel_1').carousel({
        interval: false
    })
    $('#Carousel_2').carousel({
        interval: false
    })
    $('#Carousel_3').carousel({
        interval: false
    })


    /**************Scroll Up Icon*************/
    /*Scroll UP icon Hide First Load*/
    var scrollup=$('.scrollup');
    if( $(this).scrollTop()>=200){
        scrollup.show();
    }
    else{
        scrollup.hide();
    }

    /*Scroll UP icon Hide and show according to position*/
    $(window).scroll(function(){
        if( $(this).scrollTop()>=100){
            scrollup.fadeIn();
        }
        else{
            scrollup.fadeOut();
        }
    });

    /*scroll Up on click*/
    $('.scrollup').click(function(){
        $("html,body").animate({scrollTop:0},2000);
    });


});
