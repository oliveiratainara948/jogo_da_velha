// variaveis
let btn1 = 0;
let btn2 = 0;
let btn3 = 0;
let btn4 = 0;
let btn5 = 0;
let btn6 = 0;
let btn7 = 0;
let btn8 = 0;
let btn9 = 0;
let controle = 0;
let jogadas = 0;
let finaljogo = false;

// click botão 1
function clickbtn1() {
    let btn = document.getElementById('btn1');

    if (btn.value == ' ' && !finaljogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.value = "🐴";
            btn1 = "X";
        } else {
            controle = 0;
            btn.value = "🐮";
            btn1 = "O";
        }
    }
    verificaganhador()
}

// click botão 2
function clickbtn2() {
    let btn = document.getElementById('btn2');

    if (btn.value == ' ' && !finaljogo) {
        jogadas++;
         if (controle == 0) {
            controle = 1;
            btn.value = "🐴";
            btn2 = "X";
        } else {
            controle = 0;
            btn.value = "🐮";
            btn2 = "O";
        }
    }
    verificaganhador()
}

// click botão 3
function clickbtn3() {
    let btn = document.getElementById('btn3');

    if (btn.value == ' ' && !finaljogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.value = "🐴";
            btn3 = "X";
        } else {
            controle = 0;
            btn.value = "🐮";
            bnt3 = "O";
        }
    }
    verificaganhador()
}

// click botão 4
function clickbtn4() {
    let btn = document.getElementById('btn4');

    if (btn.value == ' ' && !finaljogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.value = "🐴";
            btn4 = "X";
        } else {
            controle = 0;
            btn.value = "🐮";
            btn4 = "O";
        }
    }
    verificaganhador()
}

// click botão 5
function clickbtn5() {
    let btn = document.getElementById('btn5');

    if (btn.value == ' ' && !finaljogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.value = "🐴";
            btn5 = "X";
        } else {
            controle = 0;
            btn.value = "🐮";
            btn5 = "O";
        }
    }
    verificaganhador()
}
// click botão 6
function clickbtn6() {
    let btn = document.getElementById('btn6');

    if (btn.value == ' ' && !finaljogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.value = "🐴";
            btn6 = "X";
        } else {
            controle = 0;
            btn.value = "🐮";
            btn6 = "O";
        }
    }
    verificaganhador()
}
// click botão 7
function clickbtn7() {
    let btn = document.getElementById('btn7');

    if (btn.value == ' ' && !finaljogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.value = "🐴";
            btn7 = "X";
        } else {
            controle = 0;
            btn.value = "🐮";
            bnt7 = "O";
        }
    }
    verificaganhador()
}
// click botão 8
function clickbtn8() {
    let btn = document.getElementById('btn8');

    if (btn.value == ' ' && !finaljogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.value = "🐴";
            btn8 = "X";
        } else {
            controle = 0;
            btn.value = "🐮";
            bnt8 = "O";
        }
    }
    verificaganhador()
}

// click botão 9
function clickbtn9() {
    let btn = document.getElementById('btn9');

    if (btn.value == ' ' && !finaljogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.value = "🐴";
            btn9 = "X";
        } else {
            controle = 0;
            btn.value = "🐮";
            btn9 = "O";
        }
    }
    verificaganhador()
}

// Verifica Ganhador
function verificaganhador() {
    let lbljogador = document.getElementById("lbljogador")
    let lbljogadas = document.getElementById("lbljogadas")

    // Verifica se jogador X ganhou    

    if (btn1 == 'X' && btn2 == 'X' && btn3 == 'X') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador 1 ganhou!';
        lbljogadas.innerText = '';
        return;
    }
    if (btn4 == 'X' && btn5 == 'X' && btn6 == 'X') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador 1 ganhou!';
        lbljogadas.innerText = '';
        return;
    }
    if (btn7 == 'X' && btn8 == 'X' && btn9 == 'X') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador 1 ganhou!';
        lbljogadas.innerText = '';
        return;
    }
    if (btn1 == 'X' && btn4 == 'X' && btn7 == 'X') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador 1 ganhou!';
        lbljogadas.innerText = '';
        return;
    }
    if (btn2 == 'X' && btn5 == 'X' && btn8 == 'X') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador 1 ganhou!';
        lbljogadas.innerText = '';
        return;
    }
    if (btn3 == 'X' && btn6 == 'X' && btn9 == 'X') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador 1 ganhou!';
        lbljogadas.innerText = '';
        return;
    }
    if (btn1 == 'X' && btn5 == 'X' && btn9 == 'X') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador 1 ganhou!';
        lbljogadas.innerText = '';
        return;
    }
    if (btn3 == 'X' && btn5 == 'X' && btn7 == 'X') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador 1 ganhou!';
        lbljogadas.innerText = '';
        return;
    }


    // Verifica se jogador O ganhou 

    if (btn1 == 'O' && btn2 == 'O' && btn3 == 'O') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador 2 ganhou!';
        lbljogadas.innerText = '';
        return;
    }

    if (btn4 == 'O' && btn5 == 'O' && btn6 == 'O') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador 2 ganhou!';
        lbljogadas.innerText = '';
        return;
    }

    if (btn7 == 'O' && btn8 == 'O' && btn9 == 'O') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador 2 ganhou!';
        lbljogadas.innerText = '';
        return;
    }

    if (btn1 == 'O' && btn4 == 'O' && btn7 == 'O') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador 2 ganhou!';
        lbljogadas.innerText = '';
        return;
    }

    if (btn2 == 'O' && btn5 == 'O' && btn8 == 'O') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador 2 ganhou!';
        lbljogadas.innerText = '';
        return;
    }

    if (btn3 == 'O' && btn6 == 'O' && btn9 == 'O') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador 2 ganhou!';
        lbljogadas.innerText = '';
        return;
    }
    if (btn1 == 'O' && btn5 == 'O' && btn9 == 'O') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador 2 ganhou!';
        lbljogadas.innerText = '';
        return;
    }
    if (btn3 == 'O' && btn5 == 'O' && btn7 == 'O') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador 2 ganhou!';
        lbljogadas.innerText = '';
        return;
    }

    if (jogadas == 9) {
        finaljogo = true;
        lbljogador.innerText = 'Empate!';
        lbljogadas.innerText = '';
        return;
    }

    if (controle == 0) {
        lbljogador.innerText = 'Jogador 1 ';
    } else {
        lbljogador.innerText = 'Jogador 2 ';
    }
    lbljogadas.innerText = '(' + (jogadas + 1) + 'ª Jogada)';
}

// Click do botão Reiniciar
function clickReiniciar() {
    btn1 = 0;
    btn2 = 0;
    btn3 = 0;
    btn4 = 0;
    btn5 = 0;
    btn6 = 0;
    btn7 = 0;
    btn8 = 0;
    btn9 = 0;
    controle = 0;
    jogadas = 0;
    finaljogo = false;

    let b1 = document.getElementById('btn1');
    let b2 = document.getElementById('btn2');
    let b3 = document.getElementById('btn3');
    let b4 = document.getElementById('btn4');
    let b5 = document.getElementById('btn5');
    let b6 = document.getElementById('btn6');
    let b7 = document.getElementById('btn7');
    let b8 = document.getElementById('btn8');
    let b9 = document.getElementById('btn9');

    b1.value = ' ';
    b2.value = ' ';
    b3.value = ' ';
    b4.value = ' ';
    b5.value = ' ';
    b6.value = ' ';
    b7.value = ' ';
    b8.value = ' ';
    b9.value = ' ';

    //Reiniciar Label 
    let lblJogador = document.getElementById('lbljogador');
    let lblJogadas = document.getElementById('lbljogadas');

    lblJogador.innerText = 'Jogador X';
    lblJogadas.innerText = '(1ª Jogada)';
}