"use strict";

import CanvasManager from "./CanvasManager";

const WAIT_TIME = 50;

class Start {
    constructor() {
        this.canvasManager = new CanvasManager();

        this.initImage();

        window.onresize = () => {
            this.resizeImage();
        };

        this.resizeImage();

        let interval = setInterval(() => {
            this.canvasManager.moveLeft();
            this.canvasManager.drawFon();
            this.canvasManager.drawRectangle();
            this.cloneImage();
        }, WAIT_TIME);
    }

    initImage() {
        this.image = document.getElementById("renderImage");
        this.image.hidden = false;
    }

    cloneImage() {
        this.image.src = this.canvasManager.getCanvas().toDataURL("image/png");
    }

    resizeImage() {
        this.image.width = document.documentElement.clientWidth;
        this.image.height = document.documentElement.clientHeight;
    }
}

window.onload = function() {
    const start = new Start();
};
