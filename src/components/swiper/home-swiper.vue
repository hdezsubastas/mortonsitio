<template>
    <div v-if="size">
      <swiper
        :modules="[Navigation, Pagination,EffectFade, Autoplay, EffectCube]"
        navigation
        pagination
        :effect="'cube'"
        :fadeEffect="{ crossFade: true }"
        :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
        }"
        loop
        class="mySwiper"
      >
        <swiper-slide v-for="slide in slides" :key="slide.id">
          <div class="slide-container" v-if="slide.subWebBan_Img">
            <img :src="getImagePath(slide.subWebBan_Img)" :alt="slide.titulo" class="slide-image" />
            <div class="slide-text">
                <h2 class="h2-slider">{{ slide.subWebBan_Par1}}</h2>
                <p>{{ slide.subWebInfo_FecMan }}</p>
                <p>{{ slide.subWebBan_Par2 }}</p>
                <router-link :to="`/subasta/${slide.subasta_NumSub}`" class="btn btn-sm px-4 fw-medium  btn-show-more">Ver más</router-link>
            </div>
          </div>
          <div class="slide-container" v-if="slide.banner_Img">
            <img :src="getImagePath(slide.banner_Img)" :alt="slide.banner_Tit" class="slide-image" />
            <div class="slide-text">
                <h2 class="h2-slider">{{ slide.banner_Tit}}</h2>
                <p>{{ slide.banner_Parrafo }}</p>
                <p><a :href="slide.banner_Link" class="btn btn-sm px-4 fw-medium  btn-show-more">{{ slide.banner_TitLink }}</a></p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import  Axios from 'axios';
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Navigation, Pagination, EffectFade,  Autoplay, EffectCube} from "swiper/modules";
  import "swiper/css";
  import "swiper/css/navigation";
  import 'swiper/css/effect-fade';
  import 'swiper/css/effect-cube';
  import "swiper/css/pagination";
  

  const slides = ref(null);
  const size = ref(null);

    onMounted(()=>{
        getData();
    })

    
  
    const getData = async () => {
        try {
            const response = await  Axios.get('http://127.0.0.1/serverside/getAuctions.php');
            slides.value=response.data;
            size.value = slides.value.length;
            console.log(slides);
        } catch (error) {
            alert(error);
        } finally {
            console.log("terminado ");
        }
    };

    const getImagePath = (imageName) => {
        return `/images/${imageName}`;
    }

  </script>
  
  <style scoped>
  .mySwiper {
    width: 100%;
    height: auto;
  }

  .swiper{
    padding-top:unset!important;
    padding-bottom:unset!important;
  }
  
  .slide-container {
    position: relative;
    width: 100%;
    height: 576px;
  }
  
  .slide-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .btn-show-more{
    background-color: #000;
    color: white;
  }

  .h2-slider{
    margin-bottom:2px!important;
    color: white;
    font-size: 22px!important;
  }

  .slide-text {
    position: absolute;
    bottom: 10%;
    margin-left: 20px;
    text-align: left;
    background: #004D43; /* Fondo oscuro con transparencia */
    color: white;
    padding: 15px;
    border-radius: 8px;
    max-width: 470px;
    opacity: 80%;
  }
  </style>