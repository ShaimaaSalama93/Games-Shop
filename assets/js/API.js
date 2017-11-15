$(document).ready(function() {

    /********API Call****************/
    $.getJSON( "https://api.myjson.com/bins/l9pn3", function( data ) {
        var index=0;/*data slice index*/
        for(i=0;i<2;i++){
            /*add new slider item with new row*/
            if(i==0){
                /*The first item with active class*/
                $('<div>').addClass('item active').append($('<div>').addClass('row 0')).appendTo(".APITest")
            }
            else {
                /*The second item*/
                $('<div>').addClass('item').append($('<div>').addClass('row 1')).appendTo(".APITest")
            }

            /*Mobile Media Retrive only 3 items per loop*/
            if (window.matchMedia('(max-width: 551px)').matches)  {
                /*media <551 items=3*/
                var g= data.slice(index,index+3);
                index+=3;
            } else {
                /*media > 551 items=5 */
                var g= data.slice(index,index+5);
                index+=5;
            }

            /*Item data*/
            $.each(g, function (key, val) {
                /*Rating*/
                var items = [];/*rating array*/
                var x=val.rating;/*plus rate*/
                var z=5-x;/*empty rate*/
                for(y=0;y<x;y++){
                    items.push("<span class='glyphicon glyphicon-star Plusrate'></span>")
                }
                for(y=0;y<z;y++) {
                    items.push("<span class='glyphicon glyphicon-star'></span>")
                }

                /*item data*/
                $('<div>').addClass('col-md-3 col-xs-12 col-sm-4')
                    .append($('<div>').addClass('Catergory-item')
                        .append($('<div>').addClass('item-img')
                            .append($('<img>').attr({src:val.imageURL}))
                            .append($('<a>').attr({href: '#'}))
                        )
                        .append($('<h4>').text(val.name))
                        .append($('<a>').attr({href: '#'}).text(val.publisher))
                        .append($('<div>').addClass('rate').html(items.join( "" )))
                        .append($('<a>').addClass("item-link").attr({href: '#'}))

                    ).appendTo( '.'+i)
            })
        }

    })


});
