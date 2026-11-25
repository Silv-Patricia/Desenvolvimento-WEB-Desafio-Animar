const sol = document.querySelector('.sol');

let posX = window.innerWidth / 2;
let posY = window.innerHeight / 2;

sol.style.left = posX + 'px';
sol.style.top = posY + 'px';

const velocidade = 5; 

const teclas = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
    a: false,
    s: false,
    d: false,
    w: false
};

document.addEventListener('keydown', (event) => {
    if (teclas.hasOwnProperty(event.key)) {
        event.preventDefault();
        teclas[event.key] = true;
    }
});

document.addEventListener('keyup', (event) => {
    if (teclas.hasOwnProperty(event.key)) {
        teclas[event.key] = false;
    }
});

function moverSol() {
    if (teclas.ArrowUp || teclas.w) posY -= velocidade;
    if (teclas.ArrowDown || teclas.s) posY += velocidade;
    if (teclas.ArrowLeft || teclas.a) posX -= velocidade;
    if (teclas.ArrowRight || teclas.d) posX += velocidade;

    const metadeLargura = sol.clientWidth / 2;
    const metadeAltura = sol.clientHeight / 2;

    if (posX < metadeLargura) {
        posX = metadeLargura;
    } else if (posX > window.innerWidth - metadeLargura) {
        posX = window.innerWidth - metadeLargura;
    }

    if (posY < metadeAltura) {
        posY = metadeAltura;
    } else if (posY > window.innerHeight - metadeAltura) {
        posY = window.innerHeight - metadeAltura;
    }

    sol.style.left = posX + 'px';
    sol.style.top = posY + 'px';

    requestAnimationFrame(moverSol);
}

moverSol();