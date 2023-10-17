import {Matrix} from './matrix.js';

export class Rebound {
    element;
    xSize;
    ySize;
    matrix;
    xPosition;
    yPosition;
    xDelta;
    yDela;
    backgroundColor;
    ballColor;

    constructor(element, xSize, ySize, backgroundColor, ballColor) {
        this.element = element;
        this.backgroundColor = backgroundColor;
        this.ballColor = ballColor;
        this.xSize = xSize;
        this.ySize = ySize;
        this.xPosition = 0;
        this.yPosition = 0;
        this.xDelta = 1;
        this.yDela = 1;
        this.matrix = new Matrix(this.element, this.xSize, this.ySize);
    }

    show() {
        console.log(this.matrix);
        console.log(this.element);
        console.log(this.xSize);
        console.log(this.ySize);

        console.log(this.matrix.clear);
        this.matrix.show();
        this.matrix.clear(this.backgroundColor);
    }

    update() {
        this.matrix.clear(this.backgroundColor)
        this.matrix.set(this.xPosition, this.yPosition, this.ballColor);
        this.xPosition += this.xDelta;
        this.yPosition += this.yDela
        if(this.xPosition >= 47) this.xDelta = -1;
        if(this.yPosition >= 15) this.yDela = -1;
        if(this.xPosition === 0) this.xDelta = 1;
        if(this.yPosition === 0) this.yDela = 1;
    }
}