document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.carousel-dot');
  let currentSlide = 0;

  function goToSlide(slideIndex) {
    slides[currentSlide].classList.remove('active');
    slides[slideIndex].classList.add('active');
    currentSlide = slideIndex;

    updateCarouselPosition();
  }

  function updateCarouselPosition() {
    const carousel = document.querySelector('.carousel');
    const slideWidth = slides[currentSlide].offsetWidth;
    carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

    // Mudar a cor dos dots para #00F2F5
    dots.forEach((dot, index) => {
      dot.style.backgroundColor = index === currentSlide ? '#FC640D' : 'gainsboro';
    });
  }

  function nextSlide() {
    const nextSlideIndex = (currentSlide + 1) % slides.length;
    goToSlide(nextSlideIndex);
  }

  setInterval(nextSlide, 5000); // Trocar de slide a cada 5 segundos (5000 milissegundos)

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      if (index !== currentSlide) {
        goToSlide(index);
      }
    });
  });

  window.addEventListener('resize', () => {
    updateCarouselPosition();
  });

  updateCarouselPosition(); // Para garantir que a posição inicial esteja correta

  const slideContent = document.querySelectorAll('.slide-content');
    slideContent.forEach((content) => {
    content.style.marginRight = '1000px';
  });

  const dotsContainer = document.querySelector('.carousel-dots-container');
  dotsContainer.style.transform = 'translateX(-500px)'; // Ajuste a posição conforme necessário

});
