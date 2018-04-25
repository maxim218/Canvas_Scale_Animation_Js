"use strict";

const WIDTH = 500;
const HEIGHT = 200;
const BACKGROUND = '#2bbab3';
const LINE = 2;
const LINE_COLOR = '#0000FF';
const RECTANGE_SIZE = 100;
const RECTANGE_COLOR = "#FF0000";
const SPEED  = 5;

export default class CanvasManager {
    constructor() {
        this.can = document.getElementById('can');
        this.holst = this.can.getContext('2d');
        this.initPosition();
        this.drawFon();
        this.drawRectangle();
    }

    initPosition() {
        this.x = 0;
        this.y = 50;
    }

    moveLeft() {
        this.x += SPEED;
        if(this.x >= WIDTH - RECTANGE_SIZE) {
            this.x = 0;
        }
    }

    drawFon() {
        this.holst.fillStyle = BACKGROUND;
        this.holst.fillRect(0, 0, WIDTH, HEIGHT);
        this.holst.strokeStyle = LINE_COLOR;
        this.holst.lineWidth = LINE;
        this.drawLine(0, 0, WIDTH, HEIGHT);
        this.drawLine(0, HEIGHT, WIDTH, 0);
    }

    drawLine(x1, y1, x2, y2) {
        const holst = this.holst;
        holst.beginPath();
        holst.moveTo(x1, y1);
        holst.lineTo(x2, y2);
        holst.closePath();
        holst.stroke();
    }

    drawRectangle() {
        this.holst.fillStyle = RECTANGE_COLOR;
        this.holst.fillRect(this.x, this.y, RECTANGE_SIZE, RECTANGE_SIZE);
    }
}
