<template>
    <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :pagination="true"
    :modules="modules"
    >
      <swiper-slide><img src="images/next/mini_ayc.jpg"><div class="text-swiper">Autos y Camiones</div></swiper-slide>
      <swiper-slide><img src="images/next/prestamos.png"><div class="text-swiper">Morton Prestamos</div></swiper-slide>
      <swiper-slide><img src="images/next/mini_bristol.jpg"><div class="text-swiper">Bristol</div></swiper-slide>
      <swiper-slide><img src="images/next/mini_porcelana.jpg"><div class="text-swiper">Taller de Porcelana</div></swiper-slide>
    </swiper>

  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { EffectCoverflow, Pagination } from 'swiper/modules';
    // Import Swiper styles
    import 'swiper/css/bundle';
    import 'swiper/css/effect-coverflow';
    import 'swiper/css/pagination';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        const onSwiper = (swiper) => {
          console.log(swiper);
        };
        const onSlideChange = () => {
          //console.log('slide change');
        };
        return {
          onSwiper,
          onSlideChange,
          modules: [EffectCoverflow, Pagination]
        };
      },
    };
  </script>