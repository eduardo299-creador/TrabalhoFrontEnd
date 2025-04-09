// Botão "Baixar Agora" muda para "Jogar"
document.addEventListener("DOMContentLoaded", function () {
    const botaoDownload = document.getElementById("botaoDownload");
  
    botaoDownload.addEventListener("click", function (e) {
      e.preventDefault(); // evita rolagem instantânea
      this.innerHTML = "<i class='bx bx-play'></i> Jogar";
      this.style.backgroundColor = "#4caf50"; // muda a cor se quiser
      this.style.transition = "0.3s";
    });
  });
  
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-avaliacao');
    const lista = document.getElementById('comentarios-lista');
    const notaMedia = document.getElementById('nota-media');
    const totalAvaliacoes = document.getElementById('total-avaliacoes');

    const barras = {
        5: document.getElementById('barra-5'),
        4: document.getElementById('barra-4'),
        3: document.getElementById('barra-3'),
        2: document.getElementById('barra-2'),
        1: document.getElementById('barra-1'),
    };

    let comentarios = JSON.parse(localStorage.getItem('avaliacoesSteam')) || [];

    function atualizarTela() {
        lista.innerHTML = '';
        let somaNotas = 0;
        let contagem = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

        comentarios.forEach(({ nota, texto }) => {
            const li = document.createElement('li');
            li.innerHTML = `<span>Nota ${nota}★</span> — ${texto}`;
            lista.appendChild(li);

            somaNotas += parseInt(nota);
            contagem[nota]++;
        });

        const total = comentarios.length;
        const media = total ? (somaNotas / total).toFixed(1) : '0.0';

        notaMedia.textContent = media;
        totalAvaliacoes.textContent = total;

        Object.keys(barras).forEach(n => {
            const percentual = total ? (contagem[n] / total) * 100 : 0;
            barras[n].style.width = `${percentual}%`;

            const contador = document.getElementById(`contagem-${n}`);
            if (contador) {
                contador.textContent = contagem[n];
            }
        });
    }

    form.addEventListener('submit', e => {
        e.preventDefault();
        const texto = document.getElementById('comentario').value.trim();
        const nota = parseInt(document.getElementById('nota').value);

        if (texto && nota >= 1 && nota <= 5) {
            comentarios.push({ texto, nota });
            localStorage.setItem('avaliacoesSteam', JSON.stringify(comentarios));
            atualizarTela();
            form.reset();
        } else {
            alert("Preencha o comentário e selecione uma nota válida.");
        }
    });

    atualizarTela();
});
