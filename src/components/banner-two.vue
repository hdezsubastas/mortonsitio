<template>
    <div class="featured_slick_gallery gray home-slider">
        <div class="featured_slick_gallery-slide">
            <div class="featured_slick_padd"><router-link to="" class="mfp-gallery"><img :src="bg1" class="img-fluid mx-auto" alt="" /></router-link></div>
            <div class="featured_slick_padd"><router-link to="" class="mfp-gallery"><img :src="bg2" class="img-fluid mx-auto" alt="" /></router-link></div>
            <div class="featured_slick_padd"><router-link to="" class="mfp-gallery"><img :src="bg3" class="img-fluid mx-auto" alt="" /></router-link></div>
            <div class="featured_slick_padd"><router-link to="" class="mfp-gallery"><img :src="bg4" class="img-fluid mx-auto" alt="" /></router-link></div>
        </div>
        <router-link to="" class="btn-view-pic">View photos</router-link>
    </div>
</template>

<script setup>
    import { nextTick, onMounted, ref } from 'vue';
    import bg1 from '@/assets/img/p-1.jpg'
    import bg2 from '@/assets/img/p-2.jpg'
    import bg3 from '@/assets/img/p-3.jpg'
    import bg4 from '@/assets/img/p-4.jpg'
    import $ from "jquery";
    import "slick-carousel";
    import 'slick-carousel/slick/slick.css';
    import 'slick-carousel/slick/slick-theme.css';

    const initialized = ref (false);

    const initializeSlickSlider = () => {
        nextTick(() => {
            const slider = $(".featured_slick_gallery-slide");
            try {
            if (slider.length > 0) {
                if (slider.hasClass("slick-initialized")) {
                slider.slick("unslick"); 
                }
                    slider.slick({
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    responsive: [
                        {
                        breakpoint: 768,
                            settings: {
                            arrows:true,
                            centerMode: true,
                            centerPadding: '20px',
                            slidesToShow:3
                            }
                        },
                        {
                        breakpoint: 480,
                            settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '20px',
                            slidesToShow:1
                            }
                        }
                    ]
            });
            } else {
                console.error("Slick Slider element not found!");
            }
            } catch (error) {
            console.error("Error initializing Slick Slider:", error);
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