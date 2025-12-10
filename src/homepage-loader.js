import beefBurgerImage from "./images/beef.jpg";
import chickenBurgerImage from "./images/chicken.jpg";
import fishBurgerImage from "./images/fish.jpg";

function loadHomePage() {
    const content = document.querySelector("#content")
    
    const title = document.createElement("div")
    title.classList.add("title")
    title.textContent = "Rich Burger"

    const slogan = document.createElement("div")
    slogan.classList.add("slogan")
    slogan.textContent = "Taste the Rich Life - Every bite should feel like a reward. Our menu is stacked with juicy, handcrafted burgers, crispy sides, and flavors that deliver true richness in every mouthful."

    const popularItemsTitle = document.createElement("div")
    popularItemsTitle.classList.add("sub-title")
    popularItemsTitle.textContent = "Popular Items:"

    const popularItems = document.createElement("div")
    popularItems.classList.add("popular-items")

    const beefBurger = new PopularItem(beefBurgerImage, "A beef burger", "Prime Investment 🥇", "100% premium beef, aged white cheddar, arugula, and black-pepper aioli. A high-value ROI (Return on Indulgence).");
    beefBurger.appendTo(popularItems)

    const chickenBurger = new PopularItem(chickenBurgerImage, "A chicken burger", "Rich Chick 🥈", "Crispy or grilled chicken breast, creamy slaw, and house honey-gold sauce. Your wallet won’t cluck at this one.");
    chickenBurger.appendTo(popularItems)

    const fishBurger = new PopularItem(fishBurgerImage, "A fish burger", "Codzilla Fortune 🥉", "A giant cod patty, crunchy slaw, and citrus mayo. Big flavor, big fun.");
    fishBurger.appendTo(popularItems)

    const hours = document.createElement("div")
    hours.classList.add("hours")

    const hoursTitle = document.createElement("div")
    hoursTitle.classList.add("sub-title")
    hoursTitle.textContent = "Hours"
    hours.appendChild(hoursTitle)

    const hoursList = document.createElement("ol")
    hours.appendChild(hoursList)

    const monday = document.createElement("li")
    monday.textContent = "Monday: 6am - 6pm"
    hoursList.appendChild(monday)

    const tuesday = document.createElement("li")
    tuesday.textContent = "Tuesday: 6am - 6pm"
    hoursList.appendChild(tuesday)

    const wednesday = document.createElement("li")
    wednesday.textContent = "Wednesday: 6am - 6pm"
    hoursList.appendChild(wednesday)

    const thursday = document.createElement("li")
    thursday.textContent = "Thursday: 6am - 10pm"
    hoursList.appendChild(thursday)

    const friday = document.createElement("li")
    friday.textContent = "Friday: 6am - 10pm"
    hoursList.appendChild(friday)

    const saturday = document.createElement("li")
    saturday.textContent = "Saturday: 8am - 10pm"
    hoursList.appendChild(saturday)

    const sunday = document.createElement("li")
    sunday.textContent = "Sunday: 8am - 8pm"
    hoursList.appendChild(sunday)

    // const contact = document.createElement("div")

    // const contactTitle = document.createElement("div")
    // contactTitle.classList.add("sub-title")
    // contactTitle.textContent = "Contact:"
    // contact.appendChild(contactTitle)

    // const address = document.createElement("div")
    // address.classList.add("address")
    // address.textContent = "Address: 123 Forest Drive, Forestville, Maine"
    // contact.appendChild(address)

    // const phoneNumber = document.createElement("div")
    // phoneNumber.classList.add("phone-number")
    // phoneNumber.textContent = "Phone: +64 5672901"
    // contact.appendChild(phoneNumber)
    

    content.appendChild(title)
    content.appendChild(slogan)
    content.appendChild(popularItemsTitle)
    content.appendChild(popularItems)
    content.appendChild(hours)
    // content.appendChild(contact)
}

class PopularItem {
    #image
    #imageAlt
    #name
    #description

    constructor(image, imageAlt, name, description) {
        this.#image = image
        this.#imageAlt = imageAlt
        this.#name = name
        this.#description = description
    }

    appendTo(dom) {
        const popularItem = document.createElement("div")
        popularItem.classList.add("popular-item")
        
        const itemImage = document.createElement("img")
        itemImage.src = this.#image
        itemImage.alt = this.#imageAlt

        const itemInfo = document.createElement("div")
        itemInfo.classList.add("item-info")

        const itemTitle = document.createElement("div")
        itemTitle.classList.add("sub-title")
        itemTitle.textContent = this.#name
        itemInfo.appendChild(itemTitle)

        const itemDesc = document.createElement("div")
        itemDesc.classList.add("item-desc")
        itemDesc.textContent = this.#description
        itemInfo.appendChild(itemDesc)

        popularItem.appendChild(itemInfo)
        popularItem.appendChild(itemImage)
        dom.appendChild(popularItem)
    }
}

export { loadHomePage }