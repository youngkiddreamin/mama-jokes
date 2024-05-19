// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  const jokes = [
    "Yo mama is so fat, when she sits around the house, she sits AROUND the house.",
    "Yo mama is so stupid, she stared at a cup of orange juice for 12 hours because it said 'concentrate'.",
    "Yo mama is so ugly, when she tried to join an ugly contest, they said, 'Sorry, no professionals.'",
    // Add more jokes here...
  ];

  const swiperWrapper = document.querySelector('.swiper-wrapper');
  
  jokes.forEach(joke => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.textContent = joke;
    swiperWrapper.appendChild(slide);
  });

  new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
  });
});

