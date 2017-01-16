import {Application} from "../src/Application";
import {Fixture} from "./Fixture";
import {forAll} from "./SpecHelpers"

describe("Signup feature", () => {

    let application, fixture;

    let users = [
        {name: "John"},
        {name: "Sarah"},
    ];

    beforeEach(() => {
        application = new Application("main_container");
        fixture = new Fixture(application);
    });

    it("allows user to signup with email and password", forAll(users, (u) => {
        fixture.givenUserOnSignupPage();

        fixture.whenUserEntersText(".name-input", u.name);
        fixture.whenUserEntersText(".email-input", "john@example.org");
        fixture.whenUserEntersText(".password-input", "welcome");
        fixture.whenUserClicksOn(".do-signup");

        fixture.thenUserIsNotOnSignupPage();
        fixture.thenUserIsOnHomePage();
        fixture.thenUserSeesTheirName(u.name);
    }));
});