import {SignUpPage} from "../src/SignUpPage";
import {InMemoryUsersBackend} from "../src/InMemoryUsersBackend";
import {User} from "../src/User";

export class Fixture {

    constructor(application) {
        this.page = null;
        this.container = null;
        this.usersBackend = new InMemoryUsersBackend();
        this.application = application;
        this.application.launchApp();
    }

    givenUserExists(name, email, password) {
        this.usersBackend.createUser(new User(name, email, password));
    }

    givenUserOnSignupPage() {
        this.page = new SignUpPage(this.application.container, {
            usersBackend: this.usersBackend,
        });

        this.page.render();
        this.container = this.page.container;

        this.assertUserOnThePage("signup-page");
    }

    whenUserEntersText(selector, text) {
        let element = this.query(selector);
        element.setAttribute("value", text);
        expect(element.getAttribute("value")).toEqual(text);
    }

    whenUserClicksOn(selector) {
        this.query(selector)
            .dispatchEvent(this.createEvent("click"));
    }

    thenUserIsOnSignupPage() {
        this.assertUserOnThePage("signup-page");
    }

    thenUserIsOnHomePage() {
        this.assertUserOnThePage("home-page");
    }

    thenUserSeesTheirName(name) {
        expect(this.query(".my-name").textContent)
            .toEqual(name);
    }

    thenUserSeesError(message) {
        expect(this.query(".error").textContent)
            .toEqual(message);
    }

    assertUserOnThePage(name) {
        expect(this.container.getAttribute("active-page"))
            .toEqual(name);
    }

    query(selector) {
        let element = this.container.querySelector(selector);
        expect(element).not.toBeNull(`(queried '${selector}')`);
        return element;
    }

    createEvent(name) {
        try {
            return new Event(name, {});
        } catch (e) {
            let event = document.createEvent("Event");
            event.initEvent(name, true, true);
        }
    }
}