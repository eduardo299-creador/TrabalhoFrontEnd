let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-images img');
const totalSlides = slides.length;

// Função para mover o slide
function moveSlide(step) {
    slideIndex = (slideIndex + step + totalSlides) % totalSlides;
    document.querySelector('.carousel-images').style.transform = `translateX(-${slideIndex * 200}px)`; // Ajuste o valor conforme necessário
}

// Função para mover o carrossel automaticamente
function autoPlay() {
    moveSlide(1); // Move para o próximo slide
}

// Configuração do intervalo para auto-play (a cada 4 segundos)
setInterval(autoPlay, 4000);

// Configurar os botões de navegação manual
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));
// Seleciona todos os botões de "Comprar"
const buttons = document.querySelectorAll('.game-card button');

// Adiciona um ouvinte de evento a cada botão
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Altera o texto do botão para "Usar"
        this.textContent = 'Usar';
        // Adiciona a classe "usar" para alterar a cor
        this.classList.add('usar');
        // Opcional: Desabilitar o botão após o clique
        // this.disabled = true;
    });
});
