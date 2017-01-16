import {HomePage} from "./HomePage";

export class SignUpPage {
    constructor(query) {
        this.query = query;
        this.container = document.querySelector(query);
    }

    render() {
        this.container.setAttribute("active-page", "signup-page");

        this.container.innerHTML = `
            <input type="text" class="name-input">
            <input type="text" class="email-input">
            <input type="text" class="password-input">
            <button class="do-signup">Sign Up</button>
        `;

        this.nameInput = this.container.querySelector(".name-input");
        this.doSignUpButton = this.container.querySelector(".do-signup");

        this.doSignUpButton.addEventListener("click", () => {
            let userName = this.nameInput.getAttribute("value");
            let homePage = new HomePage(this.query, userName);
            homePage.render();
        });
    }
}