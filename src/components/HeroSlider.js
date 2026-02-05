export default function HeroSlider() {
  setTimeout(() => {
    const slides = document.querySelectorAll('.hg-slide');
    if (!slides.length) return;

    let current = 0;

    slides.forEach(s => s.classList.remove('active'));
    slides[0].classList.add('active');

    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 6000);
  }, 100);
}
