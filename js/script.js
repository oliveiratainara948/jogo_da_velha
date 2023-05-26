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
function clickbtn1(){
    let btn = document.getElementById('btn1');

    if (btn.value == ' ' && !finaljogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X";
            btn1 = "X";
        } else {
            controle = 0;
            btn.value = "O";
            btn1 = "O";
        }
    }
    verificaganhador()
}

// click botão 2
function clickbtn2(){
    let btn = document.getElementById('btn2');

    if (btn.value == ' ' && !finaljogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X";
            btn2 = "X";
        } else {
            controle = 0;
            btn.value = "O";
            btn2 = "O";
        }
    }
    verificaganhador()
}

// click botão 3
function clickbtn3(){
    let btn = document.getElementById('btn3');

    if (btn.value == ' ' && !finaljogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X";
            btn3 = "X";
        } else {
            controle = 0;
            btn.value = "O";
            bnt3 = "O";
        }
    }
    verificaganhador()
}

// click botão 4
function clickbtn4(){
    let btn = document.getElementById('btn4');

    if (btn.value == ' ' && !finaljogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X";
            btn4 = "X";
        } else {
            controle = 0;
            btn.value = "O";
            btn4 = "O";
        }
    }
    verificaganhador()
}

// click botão 5
function clickbtn5(){
    let btn = document.getElementById('btn5');

    if (btn.value == ' ' && !finaljogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X";
            btn5 = "X";
        } else {
            controle = 0;
            btn.value = "O";
            btn5 = "O";
        }
    }
    verificaganhador()
}
// click botão 6
function clickbtn6(){
    let btn = document.getElementById('btn6');

    if (btn.value == ' ' && !finaljogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X";
            btn6 = "X";
        } else {
            controle = 0;
            btn.value = "O";
            btn6 = "O";
        }
    }
    verificaganhador()
}
// click botão 7
function clickbtn7(){
    let btn = document.getElementById('btn7');

    if (btn.value == ' ' && !finaljogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X";
            btn7 = "X";
        } else {
            controle = 0;
            btn.value = "O";
            bnt7 = "O";
        }
    }
    verificaganhador()
}
// click botão 8
function clickbtn8(){
    let btn = document.getElementById('btn8');

    if (btn.value == ' ' && !finaljogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X";
            btn8 = "X";
        } else {
            controle = 0;
            btn.value = "O";
            bnt8 = "O";
        }
    }
    verificaganhador()
}

// click botão 9
function clickbtn9(){
    let btn = document.getElementById('btn9');

    if (btn.value == ' ' && !finaljogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X";
            btn9 = "X";
        } else {
            controle = 0;
            btn.value = "O";
            btn9 = "O";
        }
    }
    verificaganhador()
}

// Verifica Ganhador
function verificaganhador() 
{
    let lbljogador = document.getElementById("lbljogador")
    let lbljogadas = document.getElementById("lbljogadas")

// Verifica se jogador X ganhou    

    if(btn1=='X' && btn2=='X' && btn3=='X') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador X ganhou!';
        lbljogadas.innerText = '';

    }
    if(btn4=='X' && btn5=='X' && btn6=='X') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador X ganhou!';
        lbljogadas.innerText = '';

    }
    if(btn7=='X' && btn8=='X' && btn9=='X') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador X ganhou!';
        lbljogadas.innerText = '';

    }
    if(btn1=='X' && btn4=='X' && btn7=='X') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador X ganhou!';
        lbljogadas.innerText = '';

    }
    if(btn2=='X' && btn5=='X' && btn8=='X') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador X ganhou!';
        lbljogadas.innerText = '';

    }
    if(btn3=='X' && btn6=='X' && btn9=='X') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador X ganhou!';
        lbljogadas.innerText = '';

    }
    if(btn1=='X' && btn5=='X' && btn9=='X') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador X ganhou!';
        lbljogadas.innerText = '';

    }
    if(btn3=='X' && btn5=='X' && btn7=='X') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador X ganhou!';
        lbljogadas.innerText = '';

    }


// Verifica se jogador O ganhou 

    if(btn1=='O' && btn2=='O' && btn3=='O') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador O ganhou!';
        lbljogadas.innerText = '';
    }

    if(btn4=='O' && btn5=='O' && btn6=='O') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador O ganhou!';
        lbljogadas.innerText = '';
    }

    if(btn7=='O' && btn8=='O' && btn9=='O') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador O ganhou!';
        lbljogadas.innerText = '';
    }

    if(btn1=='O' && btn4=='O' && btn7=='O') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador O ganhou!';
        lbljogadas.innerText = '';
    }

    if(btn2=='O' && btn5=='O' && btn8=='O') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador O ganhou!';
        lbljogadas.innerText = '';
    }

    if(btn3=='O' && btn6=='O' && btn9=='O') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador O ganhou!';
        lbljogadas.innerText = '';
    }
    if(btn1=='O' && btn5=='O' && btn9=='O') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador O ganhou!';
        lbljogadas.innerText = '';
    }

    if(btn3=='O' && btn5=='O' && btn7=='O') {
        finaljogo = true;
        lbljogador.innerText = 'Jogador O ganhou!';
        lbljogadas.innerText = '';
    }
}
