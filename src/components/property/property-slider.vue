<template>
    <div class="row">
        <div class="col-lg-12 col-md-12">
            <div class="property-slide btm">
                <div v-for="(item, index) in propertyData" :key="index" class="single-items">
                    <GridLayout :item="item" :height="'258px'" :border="true"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { nextTick, onMounted, ref } from 'vue';
    import { propertyData } from '@/data/data';
    import GridLayout from './grid-layout.vue';

    import $ from "jquery";
    import "slick-carousel";
    import 'slick-carousel/slick/slick.css';
    import 'slick-carousel/slick/slick-theme.css';
    
    const initialized = ref(false);

    const initializeSlickSlider = () => {
        nextTick(() => {
        const slider = $('.property-slide');
        try {
        if (slider.length > 0) {
            if (slider.hasClass("slick-initialized")) {
                slider.slick("unslick"); 
            }
            slider.slick({
            dots: true,
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

