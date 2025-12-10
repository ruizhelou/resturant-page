import { loadHomePage } from './homepage-loader.js'
import { loadMenu } from './menu-loader.js'
import { loadContact } from './contact-loader.js'
import "./styles.css"

class DomRenderer {
    #homeButton = document.querySelector(".home-btn")
    #menuButton = document.querySelector(".menu-btn")
    #contactButton = document.querySelector(".contact-btn")
    #currentSelectedButton = this.#homeButton;

    constructor() {
        this.#homeButton.addEventListener('click', event => this.render(loadHomePage, event.target))
        this.#menuButton.addEventListener('click', event => this.render(loadMenu, event.target))
        this.#contactButton.addEventListener('click', event => this.render(loadContact, event.target))
    }

    render(loader, selectedButton) {
        // Clear page
        const content = document.querySelector("#content")
        content.innerHTML = '';

        // Render page
        loader()
        
        // Highlight button
        this.#currentSelectedButton.style.borderBottomWidth = "2px"
        this.#currentSelectedButton.style.borderBottomStyle = "solid"
        this.#currentSelectedButton.style.borderBottomColor = "black"

        selectedButton.style.borderBottomWidth = "6px"
        selectedButton.style.borderBottomStyle = "solid"
        selectedButton.style.borderBottomColor = "red"
        this.#currentSelectedButton = selectedButton
    }

    get homeButton() {
        return this.#homeButton
    }
}

const domRenderer = new DomRenderer()
domRenderer.render(loadHomePage, domRenderer.homeButton)
