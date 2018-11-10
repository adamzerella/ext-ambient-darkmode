let textElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, b, small, li, label, form, td, th, em, i, span")
let coreElements = document.querySelectorAll("body, head, header, footer, section, main, div, tr")

for ( let i = 0; i < textElements.length; i++ ) {
    textElements[i].style.color = "#ffffff";
}

for ( let i = 0; i < coreElements.length; i++ ) {
    coreElements[i].style.backgroundColor = "#212121";
}