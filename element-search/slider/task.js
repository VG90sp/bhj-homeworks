const prev = document.getElementsByClassName('slider__arrow_prev')[0];
const next = document.getElementsByClassName('slider__arrow_next')[0];
const slides = document.getElementsByClassName('slider__item');
let activeSlideIndex = 0;

prev.onclick = () => {
  const oldActiveSlideIndex = activeSlideIndex;
  activeSlideIndex = activeSlideIndex - 1;

  if (activeSlideIndex < 0) {
    activeSlideIndex = slides.length - 1;
  }

  slides[activeSlideIndex].classList.add('slider__item_active');
  slides[oldActiveSlideIndex].classList.remove('slider__item_active');
};

next.onclick = () => {
    const oldActiveSlideIndex = activeSlideIndex;
    activeSlideIndex = activeSlideIndex + 1;
    if (slides.length <= activeSlideIndex) {
        activeSlideIndex = 0 ;
    }
    slides[oldActiveSlideIndex].classList.remove('slider__item_active');
    slides[activeSlideIndex].classList.add('slider__item_active');
};
