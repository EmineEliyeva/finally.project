const swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1201: {
      slidesPerView: 6.5
  },
      1200: {
          slidesPerView: 5
      },
      991: {
          slidesPerView: 5
      },
      990: {
          slidesPerView: 4
      },
      790: {
        slidesPerView: 4
    },
    720: {
      slidesPerView: 3
  },
      661: {
          slidesPerView: 3
      },
      660: {
          slidesPerView: 3
      },
      570:{
        slidesPerView: 3
      },
      370: {
          slidesPerView: 2
      }
  }
});