/* Burger start ----------------*/
const burderWrap    = document.querySelector('.burger__wrap');
const burder        = document.querySelector('.burger');
const sideBar       = document.querySelector('.side-bar');
const pageMain      = document.querySelector('.content');
const burderOverlay = document.querySelector('.burger-overlay');

const clickBurger = () => {
  burderWrap.classList.toggle('burger--active');
  sideBar.classList.toggle('side-bar--show');
  pageMain.classList.toggle('page-main--in-full-screen');
  burderOverlay.classList.toggle('is-close')
}

// close aside click 'Esc'
const closeKeyDownBurger = (event) => {
  const keyCode = event.keyCode || event.which;
  if (keyCode === 27) {
    event.preventDefault();
    burderOverlay.classList.add('is-close');
    burderWrap.classList.remove('burger--active');
    sideBar.classList.remove('side-bar--show');
  }
};

burderWrap.addEventListener('click', clickBurger);
document.addEventListener('keydown', closeKeyDownBurger);

burderOverlay.addEventListener('click', function(){
  burderOverlay.classList.add('is-close');
  burderWrap.classList.remove('burger--active');
  sideBar.classList.remove('side-bar--show');
});

const closeKeyEsc = (event) => {
  const keyCode = event.keyCode || event.which;
  if (keyCode === 27) {
    event.preventDefault();
    burderOverlay.classList.add('is-close');
    burderWrap.classList.remove('burger--active');
    sideBar.classList.remove('side-bar--show');
  }
};
/* Burder end ----------------*/

/* frame size start */

const frameWidth         = document.querySelector('.frame').offsetWidth;
const frameHeight        = document.querySelector('.frame').offsetHeight;
const frameSizeContainer = document.querySelector('.frame-size-container');

frameSizeContainer.innerHTML = `Frame Width: ${frameWidth}px; Frame Height: ${frameHeight}px`;

frame.onresize = function(){ // frame,  - Имя фрейма (name=frame)
  const frameWidth       = document.querySelector('.frame').offsetWidth;
  const frameHeight      = document.querySelector('.frame').offsetHeight;

  frameSizeContainer.innerHTML = `Frame Width: ${frameWidth}px; Frame Height: ${frameHeight}px`;
}



/* frame size end */





