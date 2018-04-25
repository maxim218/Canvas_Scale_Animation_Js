"use strict";

import CanvasManager from "./CanvasManager";

// время ожидания в интервале
const WAIT_TIME = 50;

class Start {
    constructor() {
        // объект для движения квадратика и его отрисовки
        this.canvasManager = new CanvasManager();

        // рисуем фон
        this.canvasManager.drawFon();
        // рисуем квадратик
        this.canvasManager.drawRectangle();

        // при нажатии на кнопку
        document.getElementById("btn").onclick = function() {
            // выводим холст в полноэкранный режим
            document.getElementById('can').webkitRequestFullscreen();
        };

        // интервал для циклического вызова функции
        let mainInterval = setInterval(() => {
            // двигаем квадратик влево
            this.canvasManager.moveLeft();
            // рисуем фон
            this.canvasManager.drawFon();
            // рисуем квадратик
            this.canvasManager.drawRectangle();
        }, WAIT_TIME);
    }
}

// при успешной загрузке окна
window.onload = function() {
    // создаём экземпляр класса, запускающего анимацию движения
    const start = new Start();
};
