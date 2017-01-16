export class Application {

    constructor(id) {
        this.id = id;
        this.container = `#${id}`;
    }

    launchApp() {
        let div = document.createElement("div");
        div.setAttribute("id", this.id);
        document.body.appendChild(div);
    }

}