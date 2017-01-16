import {Application} from "../src/Application";
import {Fixture} from "./Fixture";
import {forAll} from "./SpecHelpers"

describe("Signup feature", () => {

    let application, fixture;

    let users = [
        {name: "John", email: "john@example.org", password: "welcome"},
        {name: "Sarah", email: "sarah@example.org", password: "hello world"},
    ];

    beforeEach(() => {
        application = new Application("main_container");
    });

    it("allows user to signup with email and password", forAll(users, (u) => {
        fixture = new Fixture(application);

        fixture.givenUserOnSignupPage();

        fixture.whenUserEntersText(".name-input", u.name);
        fixture.whenUserEntersText(".email-input", u.email);
        fixture.whenUserEntersText(".password-input", u.password);
        fixture.whenUserClicksOn(".do-signup");

        fixture.thenUserIsOnHomePage();
        fixture.thenUserSeesTheirName(u.name);
    }));

    it("fails to sign up user with already existing email", forAll(users, (u) => {
        fixture = new Fixture(application);

        fixture.givenUserExists(u.name, u.email, u.password);
        fixture.givenUserOnSignupPage();

        fixture.whenUserEntersText(".name-input", u.name);
        fixture.whenUserEntersText(".email-input", u.email);
        fixture.whenUserEntersText(".password-input", u.password);
        fixture.whenUserClicksOn(".do-signup");

        fixture.thenUserIsOnSignupPage();
        fixture.thenUserSeesError("User with provided email already exists.")
    }));
});