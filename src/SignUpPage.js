import {HomePage} from "./HomePage";

export class SignUpPage {
    constructor(query, dependencies) {
        this.query = query;

        let {usersBackend} = dependencies;
        this.usersBackend = usersBackend;

        this.container = document.querySelector(query);
    }

    render() {
        this.container.setAttribute("active-page", "signup-page");

        this.container.innerHTML = `
            <div class="error"></div>
            <input type="text" class="name-input">
            <input type="text" class="email-input">
            <input type="text" class="password-input">
            <button class="do-signup">Sign Up</button>
        `;

        this.errorContainer = this.element(".error");
        this.nameInput = this.element(".name-input");
        this.emailInput = this.element(".email-input");
        this.doSignUpButton = this.element(".do-signup");

        this.doSignUpButton.addEventListener("click", () => this.signUp());
    }

    signUp() {
        if (this.providedUserExists())
            return this.reportUserAlreadyExists();

        this.renderHomePage();
    }

    providedUserExists() {
        return this.userExists(this.getEmail());
    }

    renderHomePage() {
        new HomePage(this.query, this.getUserName()).render();
    }

    getUserName() {
        return this.valueOf(this.nameInput);
    }

    getEmail() {
        return this.valueOf(this.emailInput);
    }

    reportUserAlreadyExists() {
        this.errorContainer.textContent =
            "User with provided email already exists.";
    }

    userExists(email) {
        return this.usersBackend.existsByEmail(email);
    }

    valueOf(input) {
        return input.getAttribute("value");
    }

    element(selector) {
        return this.container.querySelector(selector);
    }
}