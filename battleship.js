
/**
 * @file runs the game of battleship
 */
document.addEventListener('DOMContentLoaded', () => {
    let content = document.getElementById('content');
    let ocean = document.getElementById('ocean');
    base = document.getElementById('base');
    setup(content, markSquare, oSquares);
    setup(ocean, markShip, pSquares);

    for (let index = 0; index < ocean.children.length; index++) {
        possible_ai_attack_positions.push(index);
    }
    console.log(possible_ai_attack_positions);

    let resetButton = document.querySelector('#reset');
    let startButton = document.getElementById('start');
    let rotateButton = document.getElementById('rotate');
    let tripleShotButton = document.getElementById('shotbutton');
    let done = document.getElementById('choose');

    ai_functionality();

    debug_functionality();

    resetButton.addEventListener('click', () => {
        if (started) {
            base.id = 'base';
            hori = true;
            started = false;
            sinkCounter = 0;
            num2 = 0;

            specialShotStatus = "ready";
            remainingShots = 3;
            tripleShotButton.style.background = "hsl(115, 63%, 51%)";

            ai_check = 0;
            ai_level = 1;
            ai_util = 1;

            placeable = 1;

            //for ship_handler reset
            ship_array = [0];
            ship_sunk_array = [0];
            ship_array_playerSide = [0];
            ship_sunk_array_playerSide = [0];

            breakdown(content);
            breakdown(ocean);
            pSquares = [];
            oSquares = [];
            setup(content, markSquare, oSquares);
            setup(ocean, markShip, pSquares);
            setupShips(base);
            //opponent_place_ships;
            resetAsk(done);
        }
        else {
            alert('Can reset once started.');
        }
    });

    rotateButton.addEventListener('click', () => {
        if (base.id == 'base') {
            base.id = 'base-vert';
            ships.forEach(ship => ship.className += '-vert');
            hori = false;

        }
        else if (base.id == 'base-vert') {
            base.id = 'base';
            ships.forEach(ship => ship.className = ship.className.slice(0, -5));
            hori = true;
        }

    });

    startButton.addEventListener('click', () => {
        console.log('start');
        started = base.childElementCount == 0;
        if (!(started)) {
            alert('Place all the ships first!');
        } else {
            alert('Game has started!');
        }
    });

    tripleShotButton.addEventListener('click', () => {
        console.log('triple shot clicked');
        if (!(started)) {
            alert('Triple shot cannot be used until the game begins.');
        } else {
            if (specialShotStatus == "ready") {
                specialShotStatus = "firing";
                tripleShotButton.style.background = "red";
                alert("Triple shot activated! You can take three shots this turn.");
            }
            else if (specialShotStatus == "firing") {
                if (remainingShots > 1) {
                    alert("Triple shot is already activated! You have " + remainingShots + " shots remaining on this turn.");
                }
                else {
                    alert("Triple shot is already activated! You have 1 shot remaining on this turn.");
                }
            }
            else {
                alert("Triple shot can only be used once per game.");
            }
        }
    })

    let input1 = document.querySelector('#numShips');
    const shipselectclick = document.querySelector('#ok')

    shipselectclick.addEventListener('click', setShipNumber(input1, done));

});
