//============================= SHOW MENU =============================//
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navOpen = document.getElementById('nav-open');
const navClose = document.getElementById('nav-close');


if(navOpen){
    navOpen.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        navOpen.style.display = 'none';
        navClose.style.display = 'inline-block';
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        navOpen.style.display = 'inline-block';
        navClose.style.display = 'none';
    })
}


// CHANGE BACKGROUND HEADER //
function scrollHeader() {
    const header = document.getElementById('header');
    // When the scroll is greater than 50vh height then add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);


//============================= SHOW SCROLL UP =============================//
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    //when the scroll is higher than 350 viewport height, add the show-scroll class to the tag with the scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);


// Theme button toggle //
const lightButton = document.querySelector('#light-button');
const darkButton = document.querySelector('#dark-button');
// const darkTheme = document.querySelector('dark-theme');


// Switching to Dark Theme
darkButton.addEventListener('click', () => {
    darkButton.style.display = 'none';
    lightButton.style.display = 'inline-block';
    document.body.classList.add('dark-theme');
})

lightButton.addEventListener('click', () => {
    lightButton.style.display = 'none';
    darkButton.style.display = 'inline-block';
    document.body.classList.remove('dark-theme');
})


  /*=============== SCROLL REVEAL ANIMATION ===============*/
  const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
      reset: true
  })

  sr.reveal(`.home__image, .new__container, .footer__container`)
  sr.reveal(`.home__data`, {delay: 500})
  sr.reveal(`.giving__content, .gift__card`, {interval: 100})
  sr.reveal(`.celebrate__data, .footer__img1`, {origin: 'left'})
  sr.reveal(`.celebrate__img`, {origin: 'right'})
  