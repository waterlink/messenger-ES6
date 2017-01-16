export class HomePage {
    constructor(query, userName) {
        this.query = query;
        this.userName = userName;

        this.container = document.querySelector(query);
    }

    render() {
        this.container.setAttribute("active-page", "home-page");

        this.container.innerHTML = `
            <div class="my-name">${this.userName}</div>
        `
    }
}