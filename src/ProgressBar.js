export default class ProgressBar extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.createProgressBarContainer();
    }

    createProgressBarContainer() {
        this.progressBarContainer = document.createElement('div');
        this.progressBarContainer.setAttribute('class', 'progress-bar-container');
        this.progressBarContainer.style.border = '1px solid grey';
        this.progressBarContainer.style.width = '250px';
        this.progressBarContainer.style.height = '24px';
        this.progressBarContainer.style.margin = '24px';
        this.progressBarContainer.addEventListener('click', () => this.removeSelf());
        this.shadow.appendChild(this.progressBarContainer);
    }

    addProgressBarToContainer() {
        this.progressBar = document.createElement('div');
        this.progressBar.setAttribute('class', 'progress-bar-div');
        this.progressBar.style.height = '24px';
        this.progressBar.style.backgroundColor = 'grey';
        this.progressBar.style.transition = 'width 3000ms';
        this.progressBar.style.width = '0%';
        this.progressBarContainer.appendChild(this.progressBar);
        this.startProgress();
    }

    startProgress() {
        setTimeout(() => {
            this.progressBar.style.width = '100%';
        });
    }

    removeSelf() {
        this.shadow.removeChild(this.progressBarContainer);
    }
}