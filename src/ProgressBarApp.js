export default class ProgressBarApp extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.addCreateButton();
    }

    addCreateButton() {
        let createButton = document.createElement('create-button');
        this.shadow.appendChild(createButton);
    }
}
