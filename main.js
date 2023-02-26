function tocaSom(idElementoAudio,) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space'||evento.code === 'Enter') {
            listaDeTeclas[i].classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        listaDeTeclas[i].classList.remove('ativa');
    }
}
