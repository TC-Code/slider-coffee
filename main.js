const slideList = [{
    img: 'images/coffee1.jpeg',
    text: 'Lorem ipsum dolor sit amet.'
  },
  {
    img: 'images/coffee2.jpeg',
    text: 'Consectetur adipiscing elit.'
  },
  {
    img: 'images/coffee3.jpeg',
    text: 'Etiam ac nisi non nisl.'
  }
];

const image = document.querySelector('img.slider');
const imageText = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];

const time = 3000;
let active = 0;

const changeDot = () => {
  const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
  dots[activeDot].classList.remove('active');
  dots[active].classList.add('active');
}

const changeSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  image.src = slideList[active].img;
  imageText.textContent = slideList[active].text;
  changeDot();
}
let indexInterval = setInterval(changeSlide, time);

const keyChangeSlide = (e) => {
  if (e.keyCode === 37 || e.keyCode === 39) {
    clearInterval(indexInterval);
    e.keyCode === 37 ? active-- : active++;
    if (active === slideList.length) {
      active = 0;
    } else if (active < 0) {
      active = slideList.length - 1;
    }
    image.src = slideList[active].img;
    imageText.textContent = slideList[active].text;
    changeDot();
    indexInterval = setInterval(changeSlide, time);
  }
}
window.addEventListener('keydown', keyChangeSlide)