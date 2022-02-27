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