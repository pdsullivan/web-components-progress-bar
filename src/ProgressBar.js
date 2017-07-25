export default class ProgressBar extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.progress = 0;
        this.createProgressBar();
        this.startProgress();
        // console.info(`START: ${new Date()} ${new Date().getMilliseconds()}`);
    }

    createProgressBar() {
        this.progressBarContainer = document.createElement('div');
        this.progressBarContainer.style.border = '1px solid grey';
        this.progressBarContainer.style.width = '250px';
        this.progressBarContainer.style.height = '24px';
        this.progressBarContainer.style.margin = '24px';
        this.progressBarContainer.addEventListener('click', () => this.removeSelf());

        this.progressBar = document.createElement('div');
        this.progressBar.setAttribute('class', 'progress-bar-div');
        this.progressBar.style.height = '24px';
        this.progressBar.style.backgroundColor = 'grey';
        this.setProgress(0);

        this.progressBarContainer.appendChild(this.progressBar);
        this.shadow.appendChild(this.progressBarContainer);
    }

    removeSelf() {
        this.shadow.removeChild(this.progressBarContainer);
    }

    startProgress() {
        if (this.progress === 100) {
            // console.info(`END: ${new Date()} ${new Date().getMilliseconds()}`);
            return;
        }
        setTimeout(() => {
            this.setProgress(this.increment())
            this.startProgress();
        }, (3 * 60000) / 10000);
    }

    setProgress(progress) {
        this.progress = progress;
        this.progressBar.style.width = `${this.progress}%`;
    }

    increment() {
        return this.progress += 1;
    }
}

customElements.define('progress-bar', ProgressBar);