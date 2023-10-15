import { Matrix } from "./Matrix.js";

export class DigitalClock {
    
    matrix;
    date;
    hours;
    minutes;

    constructor(backgroundColor, textColor, element) {
        this.matrix = new Matrix(45, 9, element);
    }

    show() {
        this.matrix.show();
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

        this.matrix.clear('black');
        this.matrix.addLetter(tensDigitHours, {x:1, y:1});
        this.matrix.addLetter(unitsDigitHours, {x:7, y:1});
        this.matrix.set(14, 2, 'red')
        this.matrix.set(14, 3, 'red')
        this.matrix.set(14, 5, 'red')
        this.matrix.set(14, 6, 'red')
        this.matrix.addLetter(tensDigitMinutes, {x:17, y:1});
        this.matrix.addLetter(unitsDigitMinutes, {x:23, y:1});
        this.matrix.set(30, 2, 'red')
        this.matrix.set(30, 3, 'red')
        this.matrix.set(30, 5, 'red')
        this.matrix.set(30, 6, 'red')
        this.matrix.addLetter(tensDigitSeconds, {x:33, y:1});
        this.matrix.addLetter(unitsDigitSeconds, {x:39, y:1});        
    }
}