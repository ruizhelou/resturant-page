import beefBurgerImage from "./images/beef.jpg";
import chickenBurgerImage from "./images/chicken.jpg";
import fishBurgerImage from "./images/fish.jpg";
import baconBurgerImage from "./images/bacon.jpg";
import brisketBurgerImage from "./images/brisket.jpg";
import eggBurgerImage from "./images/egg.jpg";
import lambBurgerImage from "./images/lamb.jpg";
import porkBurgerImage from "./images/pork.jpg";
import tofuBurgerImage from "./images/tofu.jpg";
import turkeyBurgerImage from "./images/turkey.jpg";

function loadMenu() {
    const content = document.querySelector("#content")

    const title = document.createElement("div")
    title.classList.add("title")
    title.textContent = "Menu:"

    const menu = document.createElement("div")
    menu.classList.add("menu")

    const beefBurger = new MenuItem("Beef - Prime Investment", "100% premium beef, aged white cheddar, arugula, and black-pepper aioli. A high-value ROI (Return on Indulgence).", beefBurgerImage, "A beef burger", "$10.00")
    beefBurger.appendTo(menu)

    const chickenBurger = new MenuItem("Chicken - Rich Chick", "Crispy or grilled chicken breast, creamy slaw, and house honey-gold sauce. Your wallet won't cluck at this one.", chickenBurgerImage, "A chicken burger", "$9.50")
    chickenBurger.appendTo(menu)

    const fishBurger = new MenuItem("Fish - Codzilla Fortune", "A giant cod patty, crunchy slaw, and citrus mayo. Big flavor, big fun.", fishBurgerImage, "A fish burger", "$9.50")
    fishBurger.appendTo(menu)

    const lambBurger = new MenuItem("Lamb - The Lamborghini", "High-performance flavor with luxury-car smoothness. This herb-rubbed lamb patty accelerates from savory to succulent in one bite.", lambBurgerImage, "A fish burger", "$10.50")
    lambBurger.appendTo(menu)

    const porkBurger = new MenuItem("Pork - Fortune Hog", "A juicy pork patty fit for the top tax bracket—sweet, savory, and perfectly indulgent. Hog the wealth; we won't judge.", porkBurgerImage, "A pork burger", "$9.50")
    porkBurger.appendTo(menu)

    const brisketBurger = new MenuItem("Brisket - Billionaire's Brisket", "Slow-smoked brisket piled high like a trust fund. Juicy, lavish, and unapologetically excessive—this one tastes like old money and bold flavor.", brisketBurgerImage, "A brisket burger", "$11.00")
    brisketBurger.appendTo(menu)

    const baconBurger = new MenuItem("Bacon - The Piggy Bank", "Stack your wealth and your toppings. This bacon-loaded masterpiece pays crispy dividends with every bite—guaranteed to leave your palate feeling financially secure.", baconBurgerImage, "A brisket burger", "$10.50")
    baconBurger.appendTo(menu)

    const eggBurger = new MenuItem("Egg - Golden Yolk", "A rich, runny egg crown sits atop a premium patty—liquid gold for the burger investor looking to diversify into breakfast assets.", eggBurgerImage, "A brisket burger", "$8.50")
    eggBurger.appendTo(menu)

    const turkeyBurger = new MenuItem("Turkey - Trust Fund Turkey", "Lean, clean, and comfortably well-off. A savory turkey patty dressed in gourmet accoutrements—because even healthy choices deserve a hefty inheritance of flavor.", turkeyBurgerImage, "A turkey burger", "$9.00")
    turkeyBurger.appendTo(menu)

    const tofuBurger = new MenuItem("Tofu - Silk Stocking", "Crisp on the outside, velvety on the inside—this tofu treasure is the picture of plant-based elegance. High-yield flavor, zero guilt.", tofuBurgerImage, "A tofu burger", "$8.50")
    tofuBurger.appendTo(menu)

    content.appendChild(title)
    content.appendChild(menu)
}

class MenuItem {
    #name
    #description
    #image
    #imageAlt
    #price

    constructor(name, description, image, imageAlt, price) {
        this.#name = name
        this.#description = description
        this.#image = image
        this.#imageAlt = imageAlt
        this.#price = price
    }

    appendTo(dom) {
        const menuItem = document.createElement("div")
        menuItem.classList.add("menu-item")

        const title = document.createElement("div")
        title.classList.add("sub-title")
        title.textContent = this.#name
        menuItem.appendChild(title)

        const desc = document.createElement("div")
        desc.classList.add("desc")
        desc.textContent = this.#description
        menuItem.appendChild(desc)

        const image = document.createElement("img")
        image.src = this.#image
        image.alt = this.#imageAlt
        menuItem.appendChild(image)

        const price = document.createElement("div")
        price.classList.add("price")
        price.textContent = this.#price
        menuItem.appendChild(price)

        dom.appendChild(menuItem)
    }
}

export { loadMenu }
