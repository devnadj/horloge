export class AnalogicClock {
    element;
    svg;
    circle;
    hoursLine;
    minutesLine;
    secondsLine;
    xSize;
    ySize;
    constructor(element, size = {x:200, y:200}) {
        this.xSize = size.x;
        this.ySize = size.y;
        this.element = element;
        element.style.width = this.xSize;
        element.style.height = this.ySize;
    }

    show() {
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        this.svg.classList.add('pointers');
        this.svg.style.width = this.xSize;
        this.svg.style.height = this.ySize;

        this.hoursLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        this.hoursLine.classList.add('hours');
        this.hoursLine.setAttribute('x1', this.xSize / 2);
        this.hoursLine.setAttribute('y1', this.ySize / 2);
        this.svg.append(this.hoursLine);

        this.minutesLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        this.minutesLine.classList.add('minutes');
        this.minutesLine.setAttribute('x1', this.xSize / 2);
        this.minutesLine.setAttribute('y1', this.ySize / 2);
        this.svg.append(this.minutesLine);


        this.secondsLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        this.secondsLine.classList.add('seconds');
        this.secondsLine.setAttribute('stroke', 'black');
        this.secondsLine.setAttribute('stroke-width', 1);
        this.secondsLine.setAttribute('x1', this.xSize / 2);
        this.secondsLine.setAttribute('y1', this.ySize / 2);
        this.svg.append(this.secondsLine);

        this.circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        this.circle.setAttribute('stroke', 'black');
        this.circle.setAttribute('cx', this.xSize / 2);
        this.circle.setAttribute('cy', this.ySize / 2);
        this.circle.setAttribute('r', 6);
        this.svg.append(this.circle);

//     /* version en modifiant le CSS */
//     secondsHand.style.transform = `rotate(${angleSeconds}deg)`;
//     minutesHand.style.transform = `rotate(${angleMinutes}deg)`;
//     hoursHand.style.transform = `rotate(${angleHours}deg)`;

        for(let i = 0; i < 12; i++) {
            const delimiter = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            delimiter.classList.add('delimiter');
            delimiter.setAttribute('stroke', 'black');

            delimiter.setAttribute('x1', this.xSize / 2);
            delimiter.setAttribute('y1', 0);

            delimiter.setAttribute('x2', this.xSize / 2);
            delimiter.setAttribute('y2', 10);

            delimiter.style.transformOrigin = 'center';
            delimiter.style.transform = `rotate(${i * 30}deg)`;
            if(i%3 === 0) {
                 delimiter.setAttribute('stroke-width', '3')
                 delimiter.setAttribute('y2', 6);
            }
            this.svg.append(delimiter);
        }
        this.element.append(this.svg);
    }

    updateTime () {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        const angleHours = hours > 12 ? 0.5 * minutes + (hours -12)  * (360/12) -90 : 0.5 * minutes + hours * (360/12) - 90
        const angleMinutes = minutes * (360/60) - 90;
        const angleSeconds = seconds * (360/60) - 90;


        /* version en jouant sur les attributs x2 et y2 des lignes */
        const x2Hours = this.xSize / 2 + 0.7 * (this.xSize / 2) * Math.cos (Math.PI * angleHours / 180);
        const y2Hours = this.ySize / 2 + 0.7 * (this.ySize / 2) * Math.sin (Math.PI * angleHours / 180);
        this.hoursLine.setAttribute('stroke', 'black');
        this.hoursLine.setAttribute('x2', x2Hours)
        this.hoursLine.setAttribute('y2', y2Hours)

        const x2Minutess = this.xSize / 2 + 0.8 * (this.xSize / 2) * Math.cos (Math.PI * angleMinutes / 180);
        const y2Minutess = this.ySize / 2 + 0.8 * (this.ySize / 2) * Math.sin (Math.PI * angleMinutes / 180);
        this.minutesLine.setAttribute('x2', x2Minutess)
        this.minutesLine.setAttribute('y2', y2Minutess)

        const x2Seconds = this.xSize / 2 + 0.9 * (this.xSize / 2) * Math.cos (Math.PI * angleSeconds / 180);
        const y2Seconds = this.ySize / 2 + 0.9 * (this.ySize / 2) * Math.sin (Math.PI * angleSeconds / 180);
        this.secondsLine.setAttribute('x2', x2Seconds);
        this.secondsLine.setAttribute('y2', y2Seconds);
    }
}