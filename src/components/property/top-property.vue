<template>
    <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12">
            <div class="floral-wraps">
                <div  class="slide-livok top-arrow">
                    <div v-for="(item, index) in explorePlace" :key="index" class="single-slide mt-2">
                        <div class="card border-0 rounded-4 h-100 position-relative">
                            <router-link to="/place-search">
                                <div class="abx-thumb" data-overlay="3">
                                    <img :src="item.image" class="img-fluid" alt="">
                                </div>
                            </router-link>
                            <div class="position-absolute top-0 left-0 mt-3 ms-3 z-1">
                                <div class="d-inline-flex align-items-center justify-content-start">
                                    <div class="flex-shrink-0">
                                        <div class="square--50 circle"><img :src="item.image" class="img-fluid h-100 object-fit circle" alt=""></div>
                                    </div>
                                    <div class="explo-caption ps-3">
                                        <div class="label d-inline-flex bg-primary text-light mb-1">{{item.loction}}</div>
                                        <div class="text-light fw-medium">{{item.property}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {  onMounted, ref,nextTick  } from 'vue';
    import { explorePlace } from '@/data/data';

    import $ from "jquery";
    import "slick-carousel";
    import 'slick-carousel/slick/slick.css';
    import 'slick-carousel/slick/slick-theme.css';

    const initialized = ref(false);

    const initializeSlickSlider = () => {
        nextTick(() => {
            const slider = $('.slide-livok');
            try {
            if (slider.length > 0) {
                if (slider.hasClass("slick-initialized")) {
                    slider.slick("unslick"); 
                }
                slider.slick({
                dots: false,
                arrows:true,
                infinite: true,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                responsive: [
                    {
                    breakpoint:1400,
                    settings: {
                        arrows: true,
                        slidesToShow:3
                    }
                    },
                    {
                    breakpoint:1023,
                    settings: {
                        arrows: true,
                        slidesToShow:2
                    }
                    },
                    {
                    breakpoint:800,
                    settings: {
                        arrows: true,
                        slidesToShow:1
                    }
                    }
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
