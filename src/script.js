import {DigitalClock} from './digitalclock.js';
import {AnalogicClock} from './analogicclock.js'
import {Rebound} from './rebound.js';

debugger;
const analogicClock = new AnalogicClock(document.querySelector('.clock'), {x: 200, y: 200});
analogicClock.show();
setInterval(function(){analogicClock.updateTime()}, 1000);

const digitalClock = new DigitalClock(document.querySelector('.matrix'), '#222', '#ddd');
digitalClock.show();
setInterval(function(){digitalClock.updateTime()}, 1000);

const rebound = new Rebound(document.querySelector('.rebound'), 48, 16, '#222', [{ x:0, y:0, color:'#F00'},
{x:47, y:0, color:'#0F0'},{x:15, y:15, color:'#00F'}, {x:3, y:15, color:'#FFF'}]);;
rebound.show();
setInterval(function(){rebound.update()}, 100);