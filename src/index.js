import { loadHomePage } from './homepage-loader.js'
import { loadMenu } from './menu-loader.js'
import "./styles.css"

class DomRenderer {
    homeButton = document.querySelector(".home-btn")
    menuButton = document.querySelector(".menu-btn")
    contactButton = document.querySelector(".contact-btn")

    constructor() {
        this.homeButton.addEventListener('click', event => this.render(loadHomePage))
        this.menuButton.addEventListener('click', event => this.render(loadMenu))
    }

    render(loader) {
        const content = document.querySelector("#content")
        content.innerHTML = '';
        loader()
    }
}

const domRenderer = new DomRenderer()
domRenderer.render(loadHomePage)
