const prev = document.getElementsByClassName('slider__arrow_prev')[0];
const next = document.getElementsByClassName('slider__arrow_next')[0];
const slides = Array.from(document.getElementsByClassName('slider__item'));

prev.onclick = () => {
  const activeSlide = slides.findIndex((slide) => slide.classList.contains('slider__item_active'));
  const nextSlideIndex = activeSlide < 0 ? slides.length - 1 : activeSlide - 1;
  slides[activeSlide].classList.remove('slider__item_active');
  slides[newSlideIndex].classList.add('slider__item_active');
};

next.onclick = () => {
  const activeSlide = slides.findIndex((slide) => slide.classList.contains('slider__item_active'));
  const newSlideIndex = activeSlide >= slides.length - 1 ? 0 : activeSlide + 1;
  slides[activeSlide].classList.remove('slider__item_active');
  slides[newSlideIndex].classList.add('slider__item_active');
};
