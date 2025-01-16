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
      <swiper-slide><img src="images/next/mini01.jpg"><div class="text-swiper">Prueba de texto1</div></swiper-slide>
      <swiper-slide><img src="images/next/mini02.jpg"><div class="text-swiper">Prueba de texto1</div></swiper-slide>
      <swiper-slide><img src="images/next/mini03.jpg"><div class="text-swiper">Prueba de texto1</div></swiper-slide>
      <swiper-slide><img src="images/next/mini04.jpg"><div class="text-swiper">Prueba de texto1</div></swiper-slide>
      <swiper-slide><img src="images/next/mini05.jpg"><div class="text-swiper">Prueba de texto1</div></swiper-slide>
    
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
          console.log('slide change');
        };
        return {
          onSwiper,
          onSlideChange,
          modules: [EffectCoverflow, Pagination],
        };
      },
    };
  </script>