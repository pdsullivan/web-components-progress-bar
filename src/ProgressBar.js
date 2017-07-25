export default class ProgressBar extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.progress = 0;
        this.createProgressBar();
        this.startProgress();
    }

    createProgressBar() {
        this.progressBarContainer = document.createElement('div');
        this.progressBarContainer.style.border = '1px solid grey';
        this.progressBarContainer.style.height = '24px';
        this.progressBarContainer.style.margin = '24px';

        this.progressBar = document.createElement('div');
        this.progressBar.setAttribute('class', 'progress-bar-div');
        this.progressBar.style.height = '24px';
        this.progressBar.style.backgroundColor = 'grey';

        this.progressBarContainer.appendChild(this.progressBar);

        this.shadow.appendChild(this.progressBarContainer);
    }

    startProgress() {
        if (this.progress === 100) return;
        setTimeout(() => {
            this.setProgress(this.increment())
            this.startProgress();
        }, 10);
    }

    setProgress(progress) {
        this.progress = progress;
        this.progressBar.style.width = `${this.progress}%`;
        console.log(this.progress)
    }

    increment() {
        return this.progress += 1;
    }
}

customElements.define('progress-bar', ProgressBar);