/* Modall start ----------------*/
const btnKnowMore          = document.querySelector('.know-more');
const closeBtnKnowMore     = document.querySelector('.modal__close-btn');
const modalKnowMore        = document.querySelector('.modal');
const modalContentKnowMore = document.querySelector('.modal__content');

const opnenModalKnowMore = () => {
  modalKnowMore.classList.remove('is-close');
  modalContentKnowMore.classList.remove('is-close');
};
const closeModalKnowMore = () => {
  modalKnowMore.classList.add('is-close');
  modalContentKnowMore.classList.add('is-close');
};
  // close modal click 'Esc'
const closeKeyDownModalKnowMore = (event) => {
  const keyCode = event.keyCode || event.which;
	if (keyCode === 27) {
    event.preventDefault();
    modalKnowMore.classList.add('is-close');
    modalContentKnowMore.classList.add('is-close');
	}
};
btnKnowMore.addEventListener('click', opnenModalKnowMore);
closeBtnKnowMore.addEventListener('click', closeModalKnowMore);
modalKnowMore.addEventListener('click', closeModalKnowMore);
document.addEventListener('keydown', closeKeyDownModalKnowMore);

/* Modall end ----------------*/

/* Tabs end ----------------*/

const asideNavItemAbout   = document.querySelector('.nav-about');
const asideNavItemWork    = document.querySelector('.nav-work');
const asideNavItemLabs    = document.querySelector('.nav-labs');

const aboutTab            = document.querySelector('.about__tab');
const workTab             = document.querySelector('.work__tab');
const labsTab             = document.querySelector('.labs__tab');


const clickTabAbout = () => {
  aboutTab.classList.add('is-open');
  aboutTab.classList.remove('is-close');

  if (workTab.classList.contains('is-open')) {
    workTab.classList.remove('is-open');
    workTab.classList.add('is-close');
    asideNavItemWork.classList.remove('is-active-tab');
  } else if (labsTab.classList.contains('is-open')) {
    labsTab.classList.remove('is-open');
    labsTab.classList.add('is-close');
    asideNavItemLabs.classList.remove('is-active-tab');
  }

  asideNavItemAbout.classList.add('is-active-tab');
}

const clickTabWork = () => {
  workTab.classList.add('is-open');
  workTab.classList.remove('is-close');

  if (aboutTab.classList.contains('is-open')) {
    aboutTab.classList.remove('is-open');
    aboutTab.classList.add('is-close');
    asideNavItemAbout.classList.remove('is-active-tab');
  } else if (labsTab.classList.contains('is-open')) {
    labsTab.classList.remove('is-open');
    labsTab.classList.add('is-close');
    asideNavItemLabs.classList.remove('is-active-tab');
  }

  asideNavItemWork.classList.add('is-active-tab');

}

const clickTabLabs = () => {
  labsTab.classList.add('is-open');
  labsTab.classList.remove('is-close');

  if (aboutTab.classList.contains('is-open')) {
    aboutTab.classList.remove('is-open');
    aboutTab.classList.add('is-close');
    asideNavItemAbout.classList.remove('is-active-tab');
  } else if (workTab.classList.contains('is-open')) {
    workTab.classList.remove('is-open');
    workTab.classList.add('is-close');
    asideNavItemWork.classList.remove('is-active-tab');
  }

  asideNavItemLabs.classList.add('is-active-tab');
}

asideNavItemAbout.addEventListener('click', clickTabAbout);
asideNavItemWork.addEventListener('click', clickTabWork);
asideNavItemLabs.addEventListener('click', clickTabLabs);

/* Tabs end ----------------*/

/* Burger start ----------------*/
const burderWrap    = document.querySelector('.burger__wrap');
const burder        = document.querySelector('.burger');
const sideBar       = document.querySelector('.side-bar');
const pageMain      = document.querySelector('.page-main');
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


setInterval(function() {
  var w = window.innerWidth;
  if (w <= 1301) {
    asideNavItemAbout.addEventListener('click', clickBurger);
    asideNavItemWork.addEventListener('click', clickBurger);
    asideNavItemLabs.addEventListener('click', clickBurger);
  }
  if (w > 1301) {
    asideNavItemAbout.removeEventListener('click', clickBurger);
    asideNavItemWork.removeEventListener('click', clickBurger);
    asideNavItemLabs.removeEventListener('click', clickBurger);
  }
}, 300);
