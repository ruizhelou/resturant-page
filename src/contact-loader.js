import emailIcon from "./icons/email.svg";
import addressIcon from "./icons/address.svg";
import phoneIcon from "./icons/phone.svg";


function loadContact() {
    const content = document.querySelector("#content")

    const contact = document.createElement("div")
    contact.classList.add("contact")

    const contactTitle = document.createElement("div")
    contactTitle.classList.add("sub-title")
    contactTitle.textContent = "Contact:"

    const emailContact = new Contact("Email", "rich.burger@notarealdomain.com", emailIcon)
    emailContact.appendTo(contact)

    const addressContact = new Contact("Address", "123 Forest Drive, Forestville, Maine", addressIcon)
    addressContact.appendTo(contact)

    const phoneContact = new Contact("Phone", "+64 5672901", phoneIcon)
    phoneContact.appendTo(contact)

    content.appendChild(contactTitle)
    content.append(contact)
}

class Contact {
    #contactType
    #contactInfo
    #contactIcon

    constructor(contactType, contactInfo, contactIcon) {
        this.#contactType = contactType
        this.#contactInfo = contactInfo
        this.#contactIcon = contactIcon
    }

    appendTo(dom) {
        const contactCard = document.createElement("div")
        contactCard.classList.add("contact-card")

        const contactIcon = document.createElement("img")
        contactIcon.src = this.#contactIcon
        contactCard.appendChild(contactIcon)
        
        const contactTitle = document.createElement("div")
        contactTitle.classList.add("contact-title")
        contactTitle.textContent = this.#contactType
        contactCard.appendChild(contactTitle)

        const contactInfo = document.createElement("div")
        contactInfo.classList.add("contact-info")
        contactInfo.textContent = this.#contactInfo
        contactCard.appendChild(contactInfo)

        dom.appendChild(contactCard)
    }
}

export { loadContact }