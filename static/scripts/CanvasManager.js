"use strict";

const WIDTH = 500;
const HEIGHT = 200;
const BACKGROUND = '#2bbab3';
const LINE = 2;
const LINE_COLOR = '#0000FF';
const RECTANGE_SIZE = 100;
const RECTANGE_COLOR = "#FF0000";
const SPEED  = 5;

// класс для движения квадратика и его отрисовки
export default class CanvasManager {
    constructor() {
        // получаем объект на странице
        this.can = document.getElementById('can');
        // делаем его холстом для рисования
        this.holst = this.can.getContext('2d');
        // задаём начальное положение квадратика
        this.initPosition();
        // рисуем фон
        this.drawFon();
        // рисуем квадратик
        this.drawRectangle();
    }

    /**
     * задаём начальное положение квадратика
     */
    initPosition() {
        this.x = 0;
        this.y = 50;
    }

    /**
     * двигаем квадратик влево или ставим его в начало дорожки
     */
    moveLeft() {
        this.x += SPEED;
        if(this.x >= WIDTH - RECTANGE_SIZE) {
            this.x = 0;
        }
    }

    /**
     * отрисовка фона и двух линий
     */
    drawFon() {
        this.holst.fillStyle = BACKGROUND;
        this.holst.fillRect(0, 0, WIDTH, HEIGHT);
        this.holst.strokeStyle = LINE_COLOR;
        this.holst.lineWidth = LINE;
        this.drawLine(0, 0, WIDTH, HEIGHT);
        this.drawLine(0, HEIGHT, WIDTH, 0);
    }

    /**
     * отрисовка одной линии на холсте
     * @param x1
     * @param y1
     * @param x2
     * @param y2
     */
    drawLine(x1, y1, x2, y2) {
        const holst = this.holst;
        holst.beginPath();
        holst.moveTo(x1, y1);
        holst.lineTo(x2, y2);
        holst.closePath();
        holst.stroke();
    }

    /**
     * отрисовка квадратика
     */
    drawRectangle() {
        this.holst.fillStyle = RECTANGE_COLOR;
        this.holst.fillRect(this.x, this.y, RECTANGE_SIZE, RECTANGE_SIZE);
    }
}
