const slider = document.querySelector('.slider')
const before = slider.querySelector('.before')
const beforeImage = before.querySelector('img')
const change = slider.querySelector('.change')
const body = document.body

let isActive = false

document.addEventListener('DOMContentLoaded', () => {
    let widt = slider.offsetWidth;
    beforeImage.style.width = widt + 'px'
})

const beforeAfterSlider = (x) => {
    let shift = Math.max(0, Math.min(x, slider.offsetWidth))
    before.style.width = shift + 'px'
    change.style.left = shift + 'px'
}

const pauseEvents = (e) => {
    e.stopPropagation()
    e.preventDefault()
    return false
}

body.addEventListener('mousedown', () => {
    isActive = true
})

body.addEventListener('mouseup', () => {
    isActive = false
})

body.addEventListener('mouseleave', () => {
    isActive = false
})

body.addEventListener('mousemove', (e) => {
    if (!isActive) {
        return
    }

    let x = e.pageX

    x -= slider.getBoundingClientRect().left
    beforeAfterSlider(x)
    pauseEvents(e)
})

// for mobile devise

body.addEventListener('touchstart', () => {
    isActive = true
})

body.addEventListener('touchend', () => {
    isActive = false
})

body.addEventListener('touchcancel', () => {
    isActive = false
})

body.addEventListener('touchmove', (e) => {
    if (!isActive) {
        return
    }

    let x
    let i

    for (i = 0; i < e.changedTouches.length; i++) {
        x = e.changedTouches[i].pageX
    }

    x -= slider.getBoundingClientRect().left
    beforeAfterSlider(x)
    pauseEvents(e)

})

