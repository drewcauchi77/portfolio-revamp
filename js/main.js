$('.single-work-link').on('mouseenter', function() {
    $(this).addClass('hover-effect')
    $('.desktop-mouse-hover', this).addClass('in')
})

$('.single-work-link').on('mouseleave', function() {
    $(this).removeClass('hover-effect')
    $('.desktop-mouse-hover', this).removeClass('in')
})

$('.single-work-link').on('mousemove', function(e) {
    const {
        top, left, width, height
    } = $(this)[0].getBoundingClientRect()

    const {
        clientX, clientY
    } = e

    if (clientX < left || clientY < top || clientX > left + width || clientY > top + height) {
        $('.desktop-mouse-hover', this).removeClass('in')
        $(this).removeClass('hover-effect')
    }

    $('.desktop-mouse-hover', this).css('top', `${clientY - top}px`)
    $('.desktop-mouse-hover', this).css('left', `${clientX - left}px`)
})

$(window).resize(function(){
    location.reload();
});

if($(window).width() < 1060) {
    $(window).scroll(function() {
        var halfWindowHeight = $(window).height() / 2
        var scrollDistance = $(window).scrollTop()
        var workDistance = $('.works-sect').offset().top - halfWindowHeight
        var aboutDistance = $('.about-sect').offset().top - halfWindowHeight
        var contactDistance = $('.contact-sect').offset().top - halfWindowHeight

        if(scrollDistance >= workDistance && scrollDistance < aboutDistance) {
            $('.main-title').text('works')
        } else if(scrollDistance >= aboutDistance && scrollDistance < contactDistance) {
            $('.main-title').text('about')
        } else if(scrollDistance >= contactDistance) {
            $('.main-title').text('reach')
        }
    })
} else {
    $('.horizontal-scroller').scroll(function() {
        var scrollDistance = $('.horizontal-scroller').scrollTop()

        if(scrollDistance >= 0 && scrollDistance < 4600) {
            $('.main-title').text('works')
        } else if(scrollDistance >= 4600 && scrollDistance < 6300) {
            $('.main-title').text('about')
        } else if(scrollDistance >= 6300) {
            $('.main-title').text('reach')
        }
    })
}