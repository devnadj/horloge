import {DigitalClock} from './digitalclock.js';
import {AnalogicClock} from './analogicclock.js'
import { Rebound } from './rebound.js';

const analogicClock = new AnalogicClock(document.querySelector('.clock'), {x: 200, y: 200});
analogicClock.show();
setInterval(function(){analogicClock.updateTime()}, 1000);

const digitalClock = new DigitalClock(document.querySelector('.matrix'), '#333', '#ccc');
digitalClock.show();
setInterval(function(){digitalClock.updateTime()}, 1000);

const rebond = new Rebound(document.querySelector('.rebond'), 48, 16, 'aqua', 'red');;
rebond.show();
setInterval(function(){rebond.update()}, 100);