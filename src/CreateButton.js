import ProgressBar from './ProgressBar';

export default class CreateButton extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.createButtonElement();
    }

    createButtonElement() {
        this.button = document.createElement('button');
        this.button.innerHTML = 'Create Progress Bar';
        this.button.style.margin = '24px';
        this.button.addEventListener('click', () => this.createProgressBarClicked());
        this.shadow.appendChild(this.button);
    }

    createProgressBarClicked() {
        let progressBar = document.createElement('progress-bar');
        this.shadow.appendChild(progressBar);
    }
}

customElements.define('create-button', CreateButton);