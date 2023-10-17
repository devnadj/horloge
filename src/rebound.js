import {Matrix} from './matrix.js';

export class Rebound {
    element;
    xSize;
    ySize;
    matrix;
    xPosition;
    yPosition;
    xDelta;
    yDelta;
    backgroundColor;
    ballColor;
    balls;

    constructor(element, xSize, ySize, backgroundColor, balls) {
        this.element = element;
        this.backgroundColor = backgroundColor;
        this.xSize = xSize;
        this.ySize = ySize;
        this.xPosition = 0;
        this.yPosition = 0;
        this.xDelta = 1;
        this.yDelta = 1;
        this.matrix = new Matrix(this.element, this.xSize, this.ySize);

        this.balls = [];



        for(const ball of balls) {
            ball.xDelta = 1;
            ball.yDelta = 1;
            this.balls.push(ball);
        }
    }

    show() {
        this.matrix.show();
        this.matrix.clear(this.backgroundColor);
    }

    update() {

        this.matrix.clear(this.backgroundColor)

        for(const ball of this.balls) {
            this.matrix.set(ball.x, ball.y, ball.color);

            if(ball.x >= (this.xSize - 1)) ball.xDelta = -1;
            if(ball.y >= (this.ySize - 1)) ball.yDelta = -1;
            if(ball.x === 0) ball.xDelta = 1;
            if(ball.y === 0) ball.yDelta = 1;

            ball.x += ball.xDelta;
            ball.y += ball.yDelta
        }

        console.log(this.balls)


        // this.matrix.clear(this.backgroundColor)
        // this.matrix.set(this.xPosition, this.yPosition, this.ballColor);
        // this.xPosition += this.xDelta;
        // this.yPosition += this.yDelta
        // if(this.xPosition >= this.xSize-1) this.xDelta = -1;
        // if(this.yPosition >= this.ySize - 1) this.yDelta = -1;
        // if(this.xPosition === 0) this.xDelta = 1;
        // if(this.yPosition === 0) this.yDelta = 1;
    }
}

// setInterval(function(){digitalClock.updateTime()}, 1000);
