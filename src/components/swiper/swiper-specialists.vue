<template>

    <swiper
        :slidesPerView="4"
        :centeredSlides="true"
        :spaceBetween="10"
        :grabCursor="true"
        :pagination="{
        clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
    >
        <swiper-slide><iframe class="iframe-youtube" src="https://www.youtube.com/embed/kWQfMFbX7eg?si=o3XixGmWX7akCR_g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></swiper-slide>
        <swiper-slide><iframe class="iframe-youtube" src="https://www.youtube.com/embed/n5YaNx2TCZ4?si=eRPEXn7gI8kTajLE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
    </swiper>

  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Pagination } from 'swiper/modules';
    // Import Swiper styles
    import 'swiper/css/bundle';
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
          modules_dos: [Pagination]
        };
      },
    };
  </script>