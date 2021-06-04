let position = 0;
const slidesToShow = 6;
const slidesToScroll = 2;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const items = document.querySelectorAll('.slider-item');
const itemsCount = items.length;
const itemWidth = (container.clientWidth - slidesToShow) / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};
const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

items.forEach(item => {
  item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
  const add = Math.abs(position) + slidesToShow * itemWidth;
  const itemsLeft = itemsCount - add / itemWidth;

  if (itemsLeft >= slidesToScroll) {
    position -= movePosition;
  } else {
    position -= itemsLeft * itemWidth;
  }

  setPosition();
  checkBtns();
});

btnPrev.addEventListener('click', () => {
  const itemsLeft = Math.abs(position) / itemWidth;

  if (itemsLeft >= slidesToScroll) {
    position += movePosition;
  } else {
    position += itemsLeft * itemWidth;
  }

  setPosition();
  checkBtns();
});

checkBtns();
