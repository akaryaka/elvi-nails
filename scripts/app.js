/*sliders*/ 
const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

function swiperServicesInit() {
  const swiperServices = new Swiper(".services-swiper", {
    pagination: {
      el: ".services-swiper-pagination",
      clickable: true,
    },
  });
};

  //инициализируем слайдеры на маленьких экранах
function detectDevice() {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    swiperServicesInit();
  }else{}
}

detectDevice();