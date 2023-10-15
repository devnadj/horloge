import {DigitalClock} from './DigitalClock.js';
import {AnalogicClock} from './AnalogicClock.js'

const analogicClock = new AnalogicClock(document.querySelector('.clock'), {x: 200, y: 200});
analogicClock.show();
setInterval(function(){analogicClock.updateTime()}, 1000);

const digitalClock = new DigitalClock('black', '#777', document.querySelector('.matrix'));
digitalClock.show();
setInterval(function(){digitalClock.updateTime()}, 1000);