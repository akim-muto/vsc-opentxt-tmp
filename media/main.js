// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.

(async function () {
    const vscode = acquireVsCodeApi();

    const counter = /** @type {HTMLElement} */ (document.getElementById('lines-of-code-counter'));
    let currentValue = "0";
    // Handle messages sent from the extension to the webview
    window.addEventListener('message', async event => {
        const message = event.data; // The json data that the extension sent
        switch (message.command) {
            case 'refactor':
                currentValue = message.string;

                counter.textContent = `${currentValue}`;

                break;
        }

    });
}());