import {SignUpPage} from "../src/SignUpPage";

export class Fixture {

    constructor(application) {
        this.application = application;
        this.page = null;
        this.container = null;
    }

    givenUserOnSignupPage() {
        this.application.launchApp();
        this.page = new SignUpPage(this.application.container);
        this.page.render();
        this.container = this.page.container;

        expect(this.container.getAttribute("active-page"))
            .toEqual("signup-page");
    }

    whenUserEntersText(query, text) {
        let element = this.query(query);
        expect(element).not.toBeNull();
        element.setAttribute("value", text);
        expect(element.getAttribute("value")).toEqual(text);
    }

    whenUserClicksOn(query) {
        let element = this.query(query);
        expect(element).not.toBeNull();
        element.dispatchEvent(this.createEvent("click"));
    }

    thenUserIsNotOnSignupPage() {
        expect(this.container.getAttribute("active-page"))
            .not.toEqual("signup-page");
    }

    thenUserIsOnHomePage() {
        expect(this.container.getAttribute("active-page"))
            .toEqual("home-page");
    }

    thenUserSeesTheirName(name) {
        let element = this.query(".my-name");
        expect(element.textContent).toEqual(name);
    }

    query(query) {
        return this.container.querySelector(query);
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