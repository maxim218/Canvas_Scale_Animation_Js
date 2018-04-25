"use strict";

import CanvasManager from "./CanvasManager";

const WAIT_TIME = 50;

class Start {
    constructor() {
        this.canvasManager = new CanvasManager();

        document.getElementById("btn").onclick = function() {
            document.getElementById('can').webkitRequestFullscreen();
        };

        let interval = setInterval(() => {
            this.canvasManager.moveLeft();
            this.canvasManager.drawFon();
            this.canvasManager.drawRectangle();
        }, WAIT_TIME);
    }
}

window.onload = function() {
    const start = new Start();
};
