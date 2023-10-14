const police = {
    A : [[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1]],
    B : [[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,0]],
    C : [[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,1],[0,1,1,1,0]],
    D : [[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,0]],
    E : [[1,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,1,1]],
    F : [[1,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0]],
    G : [[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,0],[1,0,1,1,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],
    H : [[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1]],
    I : [[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[1,1,1,1,1]],
    J : [[0,1,1,1,1],[0,0,0,1,0],[0,0,0,1,0],[0,0,0,1,0],[0,0,0,1,0],[1,0,0,1,0],[0,1,1,0,0]],
    K : [[1,0,0,0,1],[1,0,0,1,0],[1,0,1,0,0],[1,1,0,0,0],[1,0,1,0,0],[1,0,0,1,0],[1,0,0,0,1]],
    L : [[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,1,1]],
    M : [[1,0,0,0,1],[1,1,0,1,1],[1,0,1,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1]],
    N : [[1,0,0,0,1],[1,1,0,0,1],[1,0,1,0,1],[1,0,0,1,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1]],
    O : [[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],
    P : [[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0]],
    Q : [[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,1,0],[0,1,1,0,1]],
    R : [[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1]],
    S : [[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,0],[0,1,1,1,0],[0,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],
    T : [[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]],
    U : [[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],
    V : [[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0]],
    W : [[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,1,0,1],[1,0,1,0,1],[0,1,0,1,0]],
    X : [[1,0,0,0,1],[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0],[0,1,0,1,0],[1,0,0,0,1],[1,0,0,0,1]],
    Y : [[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]],
    Z : [[1,1,1,1,1],[0,0,0,0,1],[0,0,0,1,0],[0,0,1,0,0],[0,1,0,0,0],[1,0,0,0,0],[1,1,1,1,1]],
    '0':[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,1,1],[1,0,1,0,1],[1,1,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],
    '1':[[0,0,1,0,0],[0,1,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,1,1,1,0]],
    '2':[[0,1,1,1,0],[1,0,0,0,1],[0,0,0,0,1],[0,0,0,1,0],[0,0,1,0,0],[0,1,0,0,0],[1,1,1,1,1]],
    '3':[[0,1,1,1,0],[1,0,0,0,1],[0,0,0,0,1],[0,0,1,1,0],[0,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],
    // '4':[[1,0,0,1,0],[1,0,0,1,0],[1,0,0,1,0],[1,1,1,1,1],[0,0,0,1,0],[0,0,0,1,0],[0,0,0,1,0]],
    '4':[[0,0,0,1,0],[0,0,1,1,0],[0,1,0,1,0],[1,0,0,1,0],[1,1,1,1,1],[0,0,0,1,0],[0,0,0,1,0]],
    '5':[[1,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,1,0],[0,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],
    '6':[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,0],[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],
    '7':[[1,1,1,1,1],[0,0,0,0,1],[0,0,0,1,0],[0,0,1,0,0],[0,1,0,0,0],[0,1,0,0,0],[0,1,0,0,0]],
    '8':[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],
    '9':[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,1],[0,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],
    ':':[[0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0]]

    

}

class Matrix {
    matrix;
    height;
    width;
    constructor(x, y) {
        this.height = y;
        this.width = x;
        this.matrix = Array(x).fill(Array(y).fill(0));
    }

    show() {
        const matrixElement = document.querySelector('.matrix')
        for(let yCounter = 0; yCounter < this.height; yCounter++) {
            const line = document.createElement('div');
            line.classList.add('line');
            line.classList.add(`l${yCounter}`)
            matrixElement.append(line);
            for(let xCounter = 0; xCounter < this.width; xCounter ++) {
                const del = document.createElement('div');
                del.classList.add('del');
                del.classList.add(`c${xCounter}`)
                line.append(del);
            }  
        }
    }

    clear(color) {
        const dels = document.querySelectorAll('.del');
        console.log(dels);
        for(const del of dels) {
            del.style.backgroundColor = color;
            //console.log(del);

        }
    }

    set(x, y, color) {
        if(y >= this.height || x >= this.width) {
            throw new Error('index out of range');
            console.log('.... . ..')
        }
        else {
            document.querySelector(`.l${y} .c${x}`).style.backgroundColor = color;
        }
    }

    addLetter(letter, position) {
        for(let y = 0; y < 7; y ++) {
            for(let x = 0; x < 5; x++) {
                if(police[letter][y][x] !== 0)
                    this.set(x + position.x, y + position.y, '#ccc');
            }
        }
    }
}

const heure = new Matrix(45, 9);
heure.show();

function showTime() {

    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    document.querySelector('p').textContent = `${hours < 10? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds:seconds}`;

    const angleHours = hours > 12 ? 0.5 * minutes + (hours -12)  * (360/12) -90 : 0.5 * minutes + hours * (360/12) - 90
    const angleMinutes = minutes * (360/60) - 90;
    const angleSeconds = seconds * (360/60) - 90;
    
    const secondsHand = document.querySelector('.seconds')
    const hoursHand = document.querySelector('.hours');
    const minutesHand = document.querySelector('.minutes');

    /* version en modifiant le CSS */
    /*
    secondsHand.style.transform = `rotate(${angleSeconds}deg)`;
    minutesHand.style.transform = `rotate(${angleMinutes}deg)`;
    hoursHand.style.transform = `rotate(${angleHours}deg)`;
    */

    /* version en jouant sur les attributs x2 et y2 des lignes */
    const x2Hours = 100 + 70 * Math.cos (Math.PI * angleHours / 180);
    const y2Hours = 100 + 70 * Math.sin (Math.PI * angleHours / 180);
    hoursHand.setAttribute('x2', x2Hours)
    hoursHand.setAttribute('y2', y2Hours)

    const x2Minutess = 100 + 80 * Math.cos (Math.PI * angleMinutes / 180);
    const y2Minutess = 100 +80 * Math.sin (Math.PI * angleMinutes / 180);
    minutesHand.setAttribute('x2', x2Minutess)
    minutesHand.setAttribute('y2', y2Minutess)

    const x2Seconds = 100 + 90 * Math.cos (Math.PI * angleSeconds / 180);
    const y2Seconds = 100 + 90 * Math.sin (Math.PI * angleSeconds / 180);
    // console.log('x2:' , x2Seconds, 'y2: ', y2Seconds);
    secondsHand.setAttribute('x2', x2Seconds);
    secondsHand.setAttribute('y2', y2Seconds);

    /* séparer les caractères de l'heure */
    const unitsDigitHours = hours %10;
    const tensDigitHours = (hours - unitsDigitHours) / 10;
    console.log('Hours : ', tensDigitHours,unitsDigitHours);
    
    const unitsDigitMinutes = minutes %10;
    const tensDigitMinutes = (minutes - unitsDigitMinutes) / 10;
    console.log('Minutes : ', tensDigitMinutes, unitsDigitMinutes);

    const unitsDigitSeconds = seconds %10;
    const tensDigitSeconds = (seconds - unitsDigitSeconds) / 10;
    console.log('Secondes : ', tensDigitSeconds, unitsDigitSeconds);


    heure.clear('black');
    heure.addLetter(tensDigitHours, {x:1, y:1});
    heure.addLetter(unitsDigitHours, {x:7, y:1});
    heure.set(14, 2, 'red')
    heure.set(14, 3, 'red')
    heure.set(14, 5, 'red')
    heure.set(14, 6, 'red')
    heure.addLetter(tensDigitMinutes, {x:17, y:1});
    heure.addLetter(unitsDigitMinutes, {x:23, y:1});
    heure.set(30, 2, 'red')
    heure.set(30, 3, 'red')
    heure.set(30, 5, 'red')
    heure.set(30, 6, 'red')
    heure.addLetter(tensDigitSeconds, {x:33, y:1});
    heure.addLetter(unitsDigitSeconds, {x:39, y:1});
}

setInterval(showTime, 1000);



