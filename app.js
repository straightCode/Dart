const nav = document.getElementById('nav');
const toggleNav = document.getElementById('burger');
const openModalVideoBtn = document.getElementById('openModalVideoBtn');
const accordeonBody = document.getElementById('accordeonBody');

window.addEventListener('scroll', fixHeader);
nav.addEventListener('click', scrollTo);
toggleNav.addEventListener('click', showNaw);
openModalVideoBtn.addEventListener('click', createModalVideo);
accordeonBody.addEventListener('click', openSpoiler)

function fixHeader(e){
  if(window.pageYOffset > 130){
    header.classList.add('fixed');
  }else{
    header.classList.remove('fixed');
  }
}
function scrollTo(e){
  e.preventDefault();
  elementId = e.target.dataset.scroll;
  console.log(elementId);
  element = document.getElementById(elementId)
  window.scroll({
    left: 0,
    top: element.offsetTop - 100,
    behavior: 'smooth',
  })
}
function showNaw(e){
  nav.classList.toggle('show');
  header.classList.add('fixed');
}
function createModalVideo(e){
  e.preventDefault();
  const html = `
      <div class="close__btn"><img src="img/modal/close.svg" id="closeModalVideoBtn" alt="close"></div>
      <iframe src="https://www.youtube.com/embed/paZDSyinA-8" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
  `;
  const modalVideo = document.createElement('div');
  modalVideo.innerHTML = html;
  modalVideo.className = 'modal--video';
  document.body.append(modalVideo);
  document.body.classList.add('noscroll');
  modalVideo.addEventListener('click', destroyModalVideo);
}
function destroyModalVideo(e){
  const modalVideo = document.querySelector('.modal--video');
  if(e.target === modalVideo || e.target.id === 'closeModalVideoBtn'){
    modalVideo.remove();
    document.body.classList.remove('noscroll');
    modalVideo.removeEventListener('click', destroyModalVideo);
  }
}
function openSpoiler(e){
  e.preventDefault();
  if(e.target.parentElement.className === 'services-item__btn'){
    e.target.closest('.services-body__item').classList.toggle('active');
  }
}

const swiper = new Swiper('.swiper-container', {
  loop: true,
  // effect: 'fade',
  // fadeEffect: {
  //   crossFade: true,
  // },
  slidesPerView: 3,
  spaceBetween: 40,
  slideToClickedSlide: true,
})