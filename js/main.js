// Debounce function - wait for an event to finish before triggering 
// Connected with a 100ms timeout to detect a stopping motion
function debounce (func) {
    let timer

    return function(event) {
        if(timer) clearTimeout(timer)
        timer = setTimeout(func, 100, event)
    }
}

// Enable a container with a horizontal scrolling motion on wheel scroll
// Only detectable on desktop, mobile swipe events cannot be triggered through this
function horizontalWheelEvent (container) {
    const scrollContainer = document.querySelector(container)

    scrollContainer.addEventListener('wheel', (event) => {
        event.preventDefault()
        // Scroll the container selected by how far the user has scrolled
        scrollContainer.scrollLeft += event.deltaY;
    })
}

// Trigger the function on document ready
horizontalWheelEvent('main')

// Call debounce function with horizontal scroll when the window is resized
window.addEventListener('resize', debounce(function() {
    horizontalWheelEvent('main')
}))