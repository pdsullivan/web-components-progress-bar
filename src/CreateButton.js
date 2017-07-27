import ProgressBar from './ProgressBar';

export default class CreateButton extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.progressBars = [];
        this.createButtonElement();
        this.setQueueForProgressBar();
    }

    createButtonElement() {
        this.button = document.createElement('button');

        this.button.innerHTML = 'Create Progress Bar';
        this.button.style.margin = '24px';
        this.button.style.padding = '10px';
        this.button.style.background = 'red';
        this.button.style.color = 'white';
        this.button.style.border = 'none';
        this.button.style.borderRadius = '9px';
        this.button.style.fontSize = '20px';

        this.button.addEventListener('click', () => this.createProgressBarClicked());
        this.shadow.appendChild(this.button);
    }

    createProgressBarClicked() {
        let progressBar = document.createElement('progress-bar');
        this.progressBars.push(progressBar);
        this.shadow.appendChild(progressBar);
        progressBar.addProgressBarToContainer();

    }

    setQueueForProgressBar() {
        // this is where i do the thing i did not get to...
    }
}
