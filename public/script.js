let instruct = document.getElementById('instructions');
let p1Count = document.getElementById('P1-marble-count');
let p2Count = document.getElementById('P2-marble-count');
let startbtn = document.getElementById('startbnt')
let p1 = document.getElementById('p1text');

function getRandIntFromTo(max) {
    return Math.floor(Math.random() * max) + 1
}
//console.log(getRandIntFromTo(10));

let player1 = 10;
let player2 = 10;
let p1enter = '';
let p2enter = ''; 


async function game() {
    let instruct = document.getElementById('instructions');
    let p1Count = document.getElementById('P1-marble-count');
    let p2Count = document.getElementById('P2-marble-count');
    let startbtn = document.getElementById('startbtn')
    let p1 = document.getElementById('p1btn');
    let exp = document.getElementById('exp');
    let p1text = document.getElementById('p1text');
    p1text.hidden = false;
    exp.innerHTML = '...'

    instruct.hidden = false;
    startbtn.hidden = true;
    p1Count.innerHTML = `Marble Count: ${player1}`;
    p2Count.innerHTML = `Marble Count: ${player2}`;

    p1.hidden = false;
    instruct.innerHTML = 'Enter #Marbles and 1(Even) or (1)Odd Example: (2, 0) <br> Player 1 turn'
}

function seperate() {

}

function checker() {
    
}

function subFromP1(x) {
    player1 -= x;
    let p1Count = document.getElementById('P1-marble-count');
    p1Count.innerHTML = `Marble Count: ${player1}`;
}
function subFromP2(x) {
    player2 -= x;
    let p2Count = document.getElementById('P2-marble-count');
    p2Count.innerHTML = `Marble Count: ${player2}`;
}

function addToP1(x) {
    player1 += x;
    let p1Count = document.getElementById('P1-marble-count');
    p1Count.innerHTML = `Marble Count: ${player1}`;
}
function addToP2(x) {
    player2 += x;
    let p2Count = document.getElementById('P2-marble-count');
    p2Count.innerHTML = `Marble Count: ${player2}`;
}

async function enter1() {
    //await sleep(3000);
    let p2putUp = getRandIntFromTo(player2) % 2;
    let p1btn = document.getElementById('p1btn');
    let p2btn = document.getElementById('p2btn');
    let instruct = document.getElementById('instructions');
    let exp = document.getElementById('exp');
    let p1text = document.getElementById('p1text');
    let p2text = document.getElementById('p2text');

    
    p1enter = document.getElementById('p1text').value;
    var str = p1enter.split(',');
    let p1putUp = parseInt(str[0]);
    let p1guess = parseInt(str[1]);
    
    if(p1putUp > player1 || p1putUp > player2 || p1putUp < 1 || p1guess < 0 || p1guess > 1 || isNaN(p1guess)|| isNaN(p1putUp)) {
        alert("Error! Invalid Input! Try Again...")
        return;
    }
    var str;
    var ostr;
    console.log(`p1putUp: ${p1putUp}   p1guess: ${p1guess}   p2putUp: ${p2putUp}`);
    if(p1guess == 0)
        str = 'even';
    else
        str = 'odd';

    if(p2putUp == 0)
        ostr = 'even';
    else
        ostr = 'odd';
    console.log(`str: ${str}`);
    exp.innerHTML = `You entered: ${str} <br> Player 2 showed ${ostr}`;
    if(p1guess != p2putUp) {
        console.log('wrong!');
        subFromP1(p1putUp);
        addToP2(p1putUp);
    } else {
        console.log('correct!');
        subFromP2(p1putUp);
        addToP1(p1putUp);
    }
    console.log('done');
    
    //Switch to player 2

    p1text.hidden = true;
    p2text.hidden = false;
    p1btn.hidden = true;
    p2btn.hidden = false;
    instruct.innerHTML = 'Player 2 turn'
    //return p1enter;


    if(player1 === 0) {
        alert('Game Over! Player 2 Wins!');
        location.reload();
    }
    if(player2 === 0) {
        alert('Game Over! Player 1 Wins!');
        location.reload();
    }
}

async function enter2() {
    //await sleep(30000);

    let p1putUp = getRandIntFromTo(player1) % 2;
    let p1btn = document.getElementById('p1btn');
    let p2btn = document.getElementById('p2btn');
    let instruct = document.getElementById('instructions');
    let exp = document.getElementById('exp');
    let p1text = document.getElementById('p1text');
    let p2text = document.getElementById('p2text');

    

    p2enter = document.getElementById('p2text').value;
    var str = p2enter.split(',');
    let p2putUp = parseInt(str[0]);
    let p2guess = parseInt(str[1]);
    p1text.placeholder = 'example: 1,0';
    var str;
    var ostr;
    if(p2putUp > player2 || p2putUp > player1|| p2putUp < 1 || p2guess < 0 || p2guess > 1 || isNaN(p2guess)|| isNaN(p2putUp)) {
        alert("Error! Invalid Input! Try Again...")
        return;
    }
    console.log(`p2putUp: ${p2putUp}   p2guess: ${p2guess}   p1putUp: ${p1putUp}`);
    if(p2guess == 0)
        str = 'even';
    else
        str = 'odd';

    if(p1putUp == 0)
        ostr = 'even';
    else
        ostr = 'odd';
    console.log(`str: ${str}`);
    exp.innerHTML = `You entered: ${str} <br> Player 2 showed ${ostr}`;
    if(p2guess != p1putUp) {
        console.log('wrong!');
        subFromP2(p2putUp);
        addToP1(p2putUp);
    } else {
        console.log('correct!');
        subFromP1(p2putUp);
        addToP2(p2putUp);
    }
    console.log('done');
    if(player2 === 0) {
        alert('Game Over! Player 1 Wins!');
        location.reload();
    }
    if(player1 === 0) {
        alert('Game Over! Player 2 Wins!');
        location.reload();
    }
    //return p2enter;
    p1text.hidden = false;
    p2text.hidden = true;
    p1btn.hidden = false;
    p2btn.hidden = true;
    instruct.innerHTML = 'Player 2 turn'

    
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}





//COSC 467, COSC 471, COSC 483
//COSC 459, COSC 442, 