export class InMemoryUsersBackend {

    constructor() {
        this.users = [];
    }

    createUser(user) {
        this.users.push(user);
    }

    existsByEmail(email) {
        return this.users
                .filter(u => u.email === email)
                .length > 0;
    }
}