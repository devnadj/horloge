import {DigitalClock} from './DigitalClock.js';
import {AnalogicClock} from './AnalogicClock.js'
import { Matrix } from './Matrix.js';

const analogicClock = new AnalogicClock(document.querySelector('.clock'), {x: 200, y: 200});
analogicClock.show();
setInterval(function(){analogicClock.updateTime()}, 1000);

const digitalClock = new DigitalClock('black', '#777', document.querySelector('.matrix'));
digitalClock.show();
setInterval(function(){digitalClock.updateTime()}, 1000);



const monMario = new Matrix(48, 16, document.querySelector('.dessin'));
console.log(monMario);
monMario.show();
monMario.set(0,0, 'blue');

let xPosition = 10;
let yPosition = 0;
let deltaX = 1;
let deltaY = 1;

function rebound() {
    monMario.clear('black');
    monMario.set(xPosition, yPosition, 'white');
    xPosition += deltaX;
    yPosition += deltaY
    if(xPosition >= 47) {
        deltaX = -1;
        // deltaY = -1;
    }
    if(yPosition >=15){
        deltaY = -1;
    }
    if(xPosition === 0) {
        deltaX = 1;
    }

    if(yPosition === 0) {
        deltaY = 1;
    }
}

setInterval(rebound, 100);