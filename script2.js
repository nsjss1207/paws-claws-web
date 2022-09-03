const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
  threshold: 0,
  rootMargin: '0px 0px -250px 0px',
};
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});

const volunteerBtn = document.querySelector('.volunteer');
volunteerBtn.addEventListener('click', function () {
  console.log(2);
  window.open(
    'https://docs.google.com/forms/d/e/1FAIpQLSfB1HVhK-kElWkIRvOcgxJ5r1rACupW2Oj7ph8lk3p1DpsIXg/viewform',
    '_self',
    false
  );
});

const instaBtn = document.querySelector('.insta-img');
instaBtn.addEventListener('click', function () {
  window.open('https://www.instagram.com/pawsandclawslko/?hl=en');
});

const facebookBtn = document.querySelector('.facebook-img');
facebookBtn.addEventListener('click', function () {
  window.open('https://www.facebook.com/pawsanddclaws/');
});
