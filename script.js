/**
* Afficher l'heure sous forme textuelle
* 
* Ici rien de bien complexe, on récupère la date courante, ensuite on 
* sépare les heures, les minutes et les secondes dans trois variables.
* Si ces variables sont inférieures à 10, on ajoute un 0 devant le chiffre
* histoire de rendre l'affichage plus agréable. Ensuite il suffit 
* d'afficher le résultat dans un élément <p> sur la page
* 
*/

    /**
     * Afficher maintenant un cadrant et des aiguilles est autrement plus 
     * complexe. La première chose consiste à afficher le cadrant. Une <div>
     * sera suffisante : mais il faut lui donner la forme adéquate :
     * .cadran {
     *     border-radius: 50%
     * }
     * 
     * une bordure, pour bien la distinguer
     * 
     * border: 1px solid #000;
     * 
     * Maintenant ajouter quelques indications d'heures sur le cadran pour faciliter
     * la lecture. Commençons par quatre indications : 3h, 6h, 9h et 12h. Ce seront
     * les plus facile à positionner.
     * 
     * Le cadran doit être en position relative, et les indications seront en position
     * absolue.
     * 
     * .cadran { position: relative; }
     * .number { position: absolute; }
     * 
     * chaque nombre possède sa propre classe, ce qui permet de la positionner 
     * indépendemment des autres. Le positionnement se fait avec les propriétés
     * CSS « top, bottom, left et right ». Le positionnement n'est pas tout à fait
     * centré puisqu'il se fait par rapport au coin supérieur gauche d'un élément
     * et non par son centre. Il faut donc pour chaque élement positionné appliquer
     * une translation.
     * 
     * .n9 {
     *     top: 50%;
     *     left: 5%
     *     transform: translation(0, -50%)
     * }
     * 
     */

    /**
     * Une fois le cadran et les nombres positionnés, il faut maintenant s'occuper de
     * l'affichage des aiguilles. Le plus simple à mon avis est d'utiliser un svg, avec
     * deux lignes qui symboliseront nos aiguilles. Les coordonnées des points des lignes
     * seront calculées en fonction de l'heure (ou des minutes). Il faut savoir qu'un SVG
     * est un élément HTML comme les autres. Il est ainsi possible pour chaque sous-élément
     * constituant un SVG de lui attribuer des classes, et par la même de modifier ses 
     * propriétés via CSS.
     * 
     * Dans les code suivant :
     * 
     * <svg class="pointers">
     *     <line class="hours" x1="100" x2="150" y1="100" y2="150" stroke="black" />
           <line class="minutes" x1="100" y1="100" x2="50" y2="50" stroke="black" />
     * </svg>
     * 
     * deux lignes noires partant du centre son ajoutéées.
     * 
     * à chacune des lignes est attribué une classe. Ce qui permet par CSS de modifier
     * .hours {
     *     stroke: red;
     * }
     * 
     * .minutes {
     *    stroke: blue;
     * }
     * 
     * De plus il est possible de modifier les coordonnées de départ et d'arrivée d'une ligne
     * grâce aux attribut (x1, y1) et (x2, y2). Pour cela il suffira simplement d'utiliser
     * .setAttribute('attribut-à-modifier', 'nouvelle-valeur)
     * 
     * Maintenant il suffit de déterminer l'angle des minutes / heures pour tracer nos lignes
     * Pour rappel, sur un cerle :
     *      3h / 15h correspondent à 0° ou 360°
     *      12h correspond à 90°
     *      9h correpond à 180°
     *      6h / 18h corres
     * 
     * 
     **/

function showTime() {

    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    
    let seconds = date.getSeconds();
    document.querySelector('p').textContent = `${hours < 10? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds:seconds}`;

    const angleHours = hours > 12 ? (hours -12)  * (360/12) -90 : hours * (360/12) - 90
    const angleMinutes = minutes * (360/60) - 90;
    const angleSeconds = seconds * (360/60) - 90;
    
    const secondsHand = document.querySelector('.seconds')
    const hoursHand = document.querySelector('.hours');
    const minutesHand = document.querySelector('.minutes');
    hoursHand.style.stroke = 'red';
    minutesHand.style.stroke = 'blue';

    /* version en modifiant le CSS */
    secondsHand.style.transform = `rotate(${angleSeconds}deg)`;
    minutesHand.style.transform = `rotate(${angleMinutes}deg)`;
    hoursHand.style.transform = `rotate(${angleHours}deg)`;

    /* version en jouant sur les attributs x2 et y2 des lignes */
    /*
    const x2Hours = 100 + 70 * Math.cos (Math.PI * angleHours / 180);
    const y2Hours = 100 + 70 * Math.sin (Math.PI * angleHours / 180);
    hoursHand.setAttribute('x2', x2Hours)
    hoursHand.setAttribute('y2', y2Hours)

    const x2Minutess = 100 + 80 * Math.cos (Math.PI * angleMinutes / 180);
    const y2Minutess = 100 +80 * Math.sin (Math.PI * angleMinutes / 180);
    minutesHand.setAttribute('x2', x2Minutess)
    minutesHand.setAttribute('y2', y2Minutess)

    const x2Seconds = 100 + 80 * Math.cos (Math.PI * angleSeconds / 180);
    const y2Seconds = 100 + 80 * Math.sin (Math.PI * angleSeconds / 180);
    console.log('x2:' , x2Seconds, 'y2: ', y2Seconds);
    secondsHand.setAttribute('x2', x2Seconds);
    secondsHand.setAttribute('y2', y2Seconds);
    */
}

setInterval(showTime, 1000);