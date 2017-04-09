let a = {
    1: 'empty',
    2: 'empty',
    3: 'empty',
    4: 'empty',
    5: 'empty',
    6: 'empty',
    7: 'empty',
    8: 'empty',
    9: 'empty'
}

let b = {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true
}

let turn = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]
let i = 0;

function check(btn) {

    function finish() {
        for (let key in b) {
            b[key] = false;
        }
        setTimeout(function() {
            alert("We have A Winner!");
        }, 1);
    }

    switch (btn.name) {
        case "b1":
            b[1] && box(1);
            break;

        case "b2":
            b[2] && box(2);
            break;

        case "b3":
            b[3] && box(3);
            break;

        case "b4":
            b[4] && box(4);
            break;

        case "b5":
            b[5] && box(5);
            break;

        case "b6":
            b[6] && box(6);
            break;

        case "b7":
            b[7] && box(7);
            break;

        case "b8":
            b[8] && box(8);
            break;

        case "b9":
            b[9] && box(9);
            break;
    }

    function box(value) {
        btn.value = turn[i];
        b[value] = false;
        a[value] = turn[i];
        i += 1;
    }

    if ((a[1] === "X" && a[2] === "X" && a[3] === "X") ||
        (a[1] === "O" && a[2] === "O" && a[3] === "O")) {
        tic.b1.id = "bluecolor";
        tic.b2.id = "bluecolor";
        tic.b3.id = "bluecolor";
        bluecolor(b1, b2, b3);
        finish();
    } else if ((a[4] === "X" && a[5] === "X" && a[6] === "X") ||
        (a[4] === "O" && a[5] === "O" && a[6] === "O")) {
        tic.b4.id = "bluecolor";
        tic.b5.id = "bluecolor";
        tic.b6.id = "bluecolor";
        finish();
    } else if ((a[7] === "X" && a[8] === "X" && a[9] === "X") ||
        (a[7] === "O" && a[8] === "O" && a[9] === "O")) {
        tic.b7.id = "bluecolor";
        tic.b8.id = "bluecolor";
        tic.b9.id = "bluecolor";
        finish();

    } else if ((a[1] === "X" && a[4] === "X" && a[7] === "X") ||
        (a[1] === "O" && a[4] === "O" && a[7] === "O")) {
        tic.b1.id = "bluecolor";
        tic.b4.id = "bluecolor";
        tic.b7.id = "bluecolor";
        finish();
    } else if ((a[2] === "X" && a[5] === "X" && a[8] === "X") ||
        (a[2] === "O" && a[5] === "O" && a[8] === "O")) {
        tic.b2.id = "bluecolor";
        tic.b5.id = "bluecolor";
        tic.b8.id = "bluecolor";
        finish();
    } else if ((a[3] === "X" && a[6] === "X" && a[9] === "X") ||
        (a[3] === "O" && a[6] === "O" && a[9] === "O")) {
        tic.b3.id = "bluecolor";
        tic.b6.id = "bluecolor";
        tic.b9.id = "bluecolor";
        finish();

    } else if ((a[1] === "X" && a[5] === "X" && a[9] === "X") ||
        (a[1] === "O" && a[5] === "O" && a[9] === "O")) {
        tic.b1.id = "bluecolor";
        tic.b5.id = "bluecolor";
        tic.b9.id = "bluecolor";
        finish();
    } else if ((a[3] === "X" && a[5] === "X" && a[7] === "X") ||
        (a[3] === "O" && a[5] === "O" && a[7] === "O")) {
        tic.b3.id = "bluecolor";
        tic.b5.id = "bluecolor";
        tic.b7.id = "bluecolor";
        finish();
    } else if (!b[1] && !b[2] && !b[3] && !b[4] && !b[5] && !b[6] && !b[7] && !b[8] && !b[9]) {
        setTimeout(function() {
            alert("It is a Tie!");
        }, 1);
    }
}

function start() {
    let start = document.getElementById('start');
    let gamearea = document.getElementById('gamearea');
    start.className += ' zom';
    setTimeout(function() {
        start.style.display = 'none';
        gamearea.style.display = 'block';
    }, 900);
}