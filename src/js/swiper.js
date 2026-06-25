import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

let mySwiper = null;

function initSwiper() {
  if (window.innerWidth < 1440) {
    if (!mySwiper) {
      mySwiper = new Swiper('.my-swiper', {
        modules: [Autoplay],

        slidesPerView: 1.18,
        spaceBetween: 16,
        loop: true,

        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });
    }
  } else {
    if (mySwiper) {
      mySwiper.destroy(true, true);
      mySwiper = null;
    }
  }
}

window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);