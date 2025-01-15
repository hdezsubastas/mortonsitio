<template>
    <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12">
            <div class="smart-textimonials smart-center" id="smart-textimonials">
                <div v-for="(item, index) in clientData" :key="index" class="item">
                    <div class="item-box">
                        <div class="smart-tes-author">
                            <div class="st-author-box">
                                <div class="st-author-thumb">
                                    <div class="quotes" :class="item.quote"><i class="fa-solid fa-quote-left"></i></div>
                                    <img :src="item.image" class="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                        
                        <div class="smart-tes-content">
                            <p>{{item.desc}}</p>
                        </div>
                        
                        <div class="st-author-info">
                            <h4 class="st-author-title">{{item.name}}</h4>
                            <span class="st-author-subtitle">{{item.position}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
  import { nextTick, onMounted, ref } from 'vue';
  import { clientData } from '@/data/data';

  import $ from "jquery";
  import "slick-carousel";
  import 'slick-carousel/slick/slick.css';
  import 'slick-carousel/slick/slick-theme.css';
  const initialized = ref(false);

  const initializeSlickSlider = () => {
    nextTick(() => {
      const slider = $('#smart-textimonials');
      try {
        if (slider.length > 0) {
          if (slider.hasClass("slick-initialized")) {
            slider.slick("unslick"); 
          }
          slider.slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows:false,
            responsive:[
              {
                  breakpoint: 1768,
                  settings: {
                      sliderShow:2
                  }
              },
              {
                  breakpoint: 480,
                  settings: {
                      sliderShow:1
                  }
              },
            ]
          });
        } else {
          console.error('Slick Slider element not found!');
        }
      } catch (error) {
        console.error('Error initializing Slick Slider:', error);
      }
    });
  };

  onMounted(() => {
    if (!initialized.value) {
      initialized.value = true;
      initializeSlickSlider();
    }
  });
</script>
