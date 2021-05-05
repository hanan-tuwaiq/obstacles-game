let game = document.getElementById('game');
let pieces = [[], [], [], [], [], []]
//create grid
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        let piece = document.createElement("div");
        piece.classList.add("piece");
        game.appendChild(piece);
        pieces[i, j].push(piece);
    }
}

//create player
let player = document.createElement('div');
player.classList.add("player");
game.appendChild(player);

//generate random obstacles
for (let index = 0; index < 5; index++) {
    let i = Math.floor(Math.random() * 6);
    let j = Math.floor(Math.random() * 6);
    if (i == 0 && j == 5) {
        continue;
    }
    pieces[i][j].classList.add('obstacle');
}

//set the goal destination
for (let i = 0; i < 6; i++) {
    let i = Math.floor(Math.random() * 6);
    let j = Math.floor(Math.random() * 6);
    if (!pieces[i][j].classList.contains('obstacle')) {
        pieces[i][j].classList.add('goal');
        break;
    }
}
//player movements
let movementCounter = 0;
let i;
let j;
document.onkeyup = (e) => {
    if (e.keyCode == '38') {
        //up
        if (movementCounter == 0) {
            pieces[0][5].classList.add('player');
            i = 0;
            j = 5;
            game.removeChild(player);
        } else {
            j -= 1;
            pieces[i][j].classList.add('player');
            pieces[i][j + 1].classList.remove('player');
        }
        if (pieces[i][j].classList.contains('obstacle')) {
            alert('u lost');
        } else if (pieces[i][j].classList.contains('goal')) {
            alert('u win');
        }

        movementCounter++;
        updateCounter(movementCounter);
    } else if (e.keyCode == '40') {
        //down
        if (movementCounter != 0 && j != 5) {
            j += 1;
            pieces[i][j].classList.add('player');
            pieces[i][j - 1].classList.remove('player');

            if (pieces[i][j].classList.contains('obstacle')) {
                alert('u lost')
            } else if (pieces[i][j].classList.contains('goal')) {
                alert('u win')
            }
            movementCounter++;
        }
        updateCounter(movementCounter);
    } else if (e.keyCode == '37') {
        //left
        if (movementCounter != 0 && i != 0) {
            i -= 1;
            pieces[i][j].classList.add('player');
            pieces[i + 1][j].classList.remove('player');

            if (pieces[i][j].classList.contains('obstacle')) {
                alert('u lost')
            } else if (pieces[i][j].classList.contains('goal')) {
                alert('u win')
            }
            movementCounter++;
        }
        updateCounter(movementCounter);
    } else if (e.keyCode == '39') {
        //right
        if (movementCounter != 0 && i != 5) {
            i += 1;
            pieces[i][j].classList.add('player');
            pieces[i - 1][j].classList.remove('player');

            if (pieces[i][j].classList.contains('obstacle')) {
                alert('u lost')
            } else if (pieces[i][j].classList.contains('goal')) {
                alert('u win')
            }
            movementCounter++;
        }
        updateCounter(movementCounter);
    }
}
function updateCounter(c) {
    document.getElementById('counter').innerText = "Movment counter: " + c;
}
