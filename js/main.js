const btnCoracao = document.querySelector('#botao_coracao');
const div = document.getElementById('nossas_fotos');
let fotosVisiveis = false;

const btn1 = document.getElementById('botao01');
const btn2 = document.getElementById('botao02');
const btn3 = document.getElementById('botao03');
const btn4 = document.getElementById('botao04');
const btn5 = document.getElementById('botao05');
const btn6 = document.getElementById('botao06');

const audioBestPart = new Audio('./musicas/BestPart.mp3');
const audio2Much = new Audio('./musicas/2Much.mp3');
const audioForTonight = new Audio('./musicas/ForTonight.mp3');
const audioAroundMe = new Audio('./musicas/AllAroundMe.mp3');
const audioGodspeed = new Audio('./musicas/Godspeed.mp3');
const audioLikeYouDo = new Audio('./musicas/LikeYouDo.mp3');

let tocarMusica = false;

btnCoracao.addEventListener('click', () => {
    if (fotosVisiveis) {
        div.innerHTML = '';
    } else {
        div.innerHTML = `
            <div class="conjunto_fotos">
                <div class="fotos foto01">
                    <img src="./images/foto01.png" alt="foto nossa" class="img_foto">
                    <p class="data_fotos">30/04/2024</p>
                </div>
                <div class="fotos">
                    <img src="./images/foto02.png" alt="foto nossa" class="img_foto">
                    <p class="data_fotos">08/06/2024</p>
                </div>
            </div>
            <div class="conjunto_fotos conjuto_abaixo">
                <div class="fotos foto03">
                    <img src="./images/foto03.png" alt="foto nossa" class="img_foto">
                    <p class="data_fotos">12/06/2024</p>
                </div>
                <div class="fotos">
                    <img src="./images/foto04.png" alt="foto nossa" class="img_foto">
                    <p class="data_fotos">04/07/2024</p>
                </div>
            </div>
            <div class="conjunto_fotos conjuto_abaixo">
                <div class="fotos foto05">
                    <img src="./images/foto05.png" alt="foto nossa" class="img_foto">
                    <p class="data_fotos">07/07/2024</p>
                </div>
            </div>`;

            div.scrollIntoView({behavior: 'smooth'});
    }
    fotosVisiveis = !fotosVisiveis;
});


btn1.addEventListener('click', () => {
    if (tocarMusica) {
        audioBestPart.pause();
    } else {
        audioBestPart.play();
        audioBestPart.volume = 0.5;
    }
    tocarMusica = !tocarMusica;
})

btn2.addEventListener('click', () => {
    if (tocarMusica) {
        audio2Much.pause()
    } else {
        audio2Much.play();
        audio2Much.volume = 0.5;
    }
    tocarMusica = !tocarMusica;
})

btn3.addEventListener('click', () => {
    if (tocarMusica) {
        audioAroundMe.pause();
    } else {
        audioAroundMe.play();
        audioAroundMe.volume = 0.5;
    }
    tocarMusica = !tocarMusica;
})

btn4.addEventListener('click', () => {
    if (tocarMusica) {
        audioGodspeed.pause();
    } else {
        audioGodspeed.play();
        audioGodspeed.volume = 0.5;
    }
    tocarMusica = !tocarMusica;
})

btn5.addEventListener('click', () => {
    if (tocarMusica) {
        audioForTonight.pause();
    } else {
        audioForTonight.play();
        audioForTonight.volume = 0.5;
    }
    tocarMusica = !tocarMusica;
})

btn6.addEventListener('click', () => {
    if (tocarMusica) {
        audioLikeYouDo.pause();
    } else {
        audioLikeYouDo.play();
        audioLikeYouDo.volume = 0.5;
    }
    tocarMusica = !tocarMusica;
})


