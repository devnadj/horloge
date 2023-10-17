import { Matrix } from "./matrix.js";

export class DigitalClock {
    
    matrix;
    date;
    hours;
    minutes;
    textColor;

    constructor(element, backgroundColor = 'black', textColor= 'white') {
        this.matrix = new Matrix(element, 47, 9);
        this.textColor = textColor;
        this.backgroundColor = backgroundColor;
    }

    show() {
        this.matrix.show();
        this.matrix.clear(this.backgroundColor);
    }

    updateTime () {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        /* séparer les caractères de l'heure */
        const unitsDigitHours = hours %10;
        const tensDigitHours = (hours - unitsDigitHours) / 10;
    
        const unitsDigitMinutes = minutes %10;
        const tensDigitMinutes = (minutes - unitsDigitMinutes) / 10;

        const unitsDigitSeconds = seconds %10;
        const tensDigitSeconds = (seconds - unitsDigitSeconds) / 10;

        this.matrix.clear(this.backgroundColor);
        this.matrix.addLetter(tensDigitHours, {x:1, y:1}, this.textColor);
        this.matrix.addLetter(unitsDigitHours, {x:7, y:1}, this.textColor);
        this.matrix.addLetter(':', {x:13, y:1}, this.textColor)
        this.matrix.addLetter(tensDigitMinutes, {x:18, y:1}, this.textColor);
        this.matrix.addLetter(unitsDigitMinutes, {x:24, y:1}, this.textColor);
        this.matrix.addLetter(':', {x:30, y:1}, this.textColor);
        this.matrix.addLetter(tensDigitSeconds, {x:35, y:1}, this.textColor);
        this.matrix.addLetter(unitsDigitSeconds, {x:41, y:1}, this.textColor);
    }
}