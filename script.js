// Initailize components of minimap
let minimap = document.createElement('div')
let minimapSize = document.createElement('div')
let viewer = document.createElement('div')
let content = document.createElement('iframe')
let realScale

// provide pre written styles
minimap.className = 'minimap_container'
minimapSize.className = 'minimap_size'
viewer.className = 'minimap_view'
content.className = 'minimap_content'

// append minmap with its components
minimap.append(minimapSize, viewer, content)
document.body.appendChild(minimap)

// obtain html and remove all scripts form it
let html = document.documentElement.outerHTML.replace(
  /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
  ""
)

// write html code to iframe
let frame = content.contentWindow.document
frame.open()
frame.write(html)
frame.close()

// function to provide dimensions for minimap and its components
function getDimensions(){
    let bodyWidth = document.body.clientWidth
    let bodyRatio = document.body.clientHeight / bodyWidth
    let windowRatio = window.innerHeight / window.innerWidth

    minimap.style.width = '15%'

    realScale = minimap.clientWidth / bodyWidth

    minimapSize.style.paddingTop = `${bodyRatio * 100}%`
    viewer.style.paddingTop = `${windowRatio * 100}%`

    content.style.transform = `scale(${realScale})`
    content.style.width = `${100 / realScale}%`
    content.style.height = `${100 / realScale}%`
}

// function to move viewer according to scroll
function trackScroll(){
    viewer.style.transform = `translateY(${window.scrollY * realScale}px)`
}

// call getDimentions for setting initial dimentions
getDimensions()

// add listner for scroll and risize
window.addEventListener('scroll', trackScroll)
window.addEventListener('resize',getDimensions)
