$(document).ready(function(){
    function resize_posts(){
        $('.header-card').css('margin-left', function(){
            return $(this).width() / 2 * -1;
        }).css('margin-top', function(){
            return $(this).height() / 2 * -1;
        });

        $('.post-img').css('height', function(){
            return $(this).width();
        });
    }

    resize_posts();

    $(window).resize(function(){
        resize_posts();
    });

    $('#work-link').on('click', function(){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $('#work').offset().top
        }, 200);
    })


    var $grid = $('#grid').isotope({
        layoutMode: 'fitRows'
    });

    $('.filter').on('click', function(){
        var filter_value = '.' + $(this).attr('id');
        if (filter_value == '.all') {
            $grid.isotope({ filter: '*' });
        } else {
            $grid.isotope({ filter: filter_value });
        }
    })

})
