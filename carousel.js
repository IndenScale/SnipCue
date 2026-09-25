const showcase = document.querySelector('.hero-showcase');

if (showcase) {
  const slides = [...showcase.querySelectorAll('.showcase-slide')];
  const dots = [...showcase.querySelectorAll('[data-slide]')];
  const caption = showcase.querySelector('.showcase-caption');
  const nav = showcase.querySelector('.showcase-nav');
  const labels = ['框选并标注', '滚动截取长页面', '提取文字与翻译'];
  let current = 0;

  const show = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.hidden = slideIndex !== current;
    });
    dots.forEach((dot, dotIndex) => {
      if (dotIndex === current) {
        dot.setAttribute('aria-current', 'true');
      } else {
        dot.removeAttribute('aria-current');
      }
    });
    caption.textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}　${labels[current]}`;
  };

  showcase.querySelectorAll('[data-direction]').forEach((button) => {
    button.addEventListener('click', () => show(current + Number(button.dataset.direction)));
  });
  dots.forEach((button) => {
    button.addEventListener('click', () => show(Number(button.dataset.slide)));
  });
  nav.hidden = false;
}
