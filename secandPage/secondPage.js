// const swiper = new Swiper(".mySwiper", {
//     cssMode: true,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//     },
//     mousewheel: true,
//     keyboard: true,
//   });




let swiper; 

function createSwiper() {
  if (window.innerWidth >= 300 && window.innerWidth <= 661) {
    swiper = new Swiper(".mySwiper", {
      spaceBetween: 50,
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      history: {
        key: "slide",
      },
    });
  }  else if(window.innerWidth >= 660 && window.innerWidth <= 991) {
    swiper = new Swiper(".mySwiper", {
      spaceBetween: 50,
      slidesPerView: 2,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      history: {
        key: "slide",
      },
    });
  } 
  else {
    swiper = new Swiper(".mySwiper", {
      spaceBetween: 50,
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      history: {
        key: "slide",
      },
    });
  }
}

createSwiper();

window.addEventListener("resize", function() {
  if (swiper) {
    swiper.destroy();
    createSwiper(); 
  }
});
