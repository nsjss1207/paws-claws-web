const phtBtn = document.querySelector('.photo-button');
phtBtn.addEventListener('click', function () {
  window.open('photo-gallery.html', '_self', false);
});
// let i = 0;
// document.addEventListener('click', function (e) {
//   if (e.target.classList.contains('gallery-item')) {
//     const src = e.target.getAttribute('src');
//     document.querySelector('.modal-img').src = src;
//     console.log(5);
//     const myModal = new Bootstrap.Modal(
//       document.getElementById('gallery-modal')
//       // $('#gallery-modal').modal(show);
//     );
//     myModal.show();
//   }
// });
const imgBtn = document.querySelectorAll('.home-button');
const photoBtn = document.querySelector('.photo');

const homeBtn = document.querySelector('.home-button');
homeBtn.addEventListener('click', function () {
  window.open('index.html', '_self', false);
});

// let p = 0;
// function disp(n) {
//   if (n == 1 || p == 1) {
//     document.querySelector('.logo-img').style.display = 'none';
//     p = 0;
//   } else {
//     document.querySelector('.logo-img').style.display = 'none';
//     p = 1;
//   }
// }
function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

// let clicked = false;
// let n = 0;
// const exitBtn = document.querySelector('.exit-icon');
// const navBtn = document.querySelector('.hamburger-icon');
// navBtn.addEventListener('click', function () {
//   document.querySelector('.home-button').style.visibility = 'visible';
//   document.querySelector('.photo-button').style.visibility = 'visible';
//   document.querySelector('.project-button').style.visibility = 'visible';
//   document.querySelector('.about-button').style.visibility = 'visible';
//   document.querySelector('.hamburger-icon').style.visibility = 'hidden';
//   document.querySelector('.exit-icon').style.visibility = 'visible';
// });
// exitBtn.addEventListener('click', function () {
//   document.querySelector('.home-button').style.visibility = 'hidden';
//   document.querySelector('.photo-button').style.visibility = 'hidden';
//   document.querySelector('.project-button').style.visibility = 'hidden';
//   document.querySelector('.about-button').style.visibility = 'hidden';
//   document.querySelector('.hamburger-icon').style.visibility = 'visible';
//   document.querySelector('.exit-icon').style.visibility = 'hidden';
// });
// navBtn.addEventListener('click', function () {
//   if (n == 1) {
//     n = 0;
//     console.log(5);
//     document.querySelector('.home-button').classList.add('navbar');
//     document.querySelector('.photo-button').classList.add('navbar');
//     document.querySelector('.project-button').classList.add('navbar');
//     document.querySelector('.about-button').classList.add('navbar');
//   }
// });
