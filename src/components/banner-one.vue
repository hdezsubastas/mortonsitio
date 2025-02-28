<template>
    <div class="featured_slick_gallery gray home-slider">
        <div class="featured_slick_gallery-slide" >
            <div class="featured_slick_padd" v-for="(item) in images" :key="item"><router-link to="" class="mfp-gallery"><img :src="item" class="img-fluid mx-auto" alt="" /></router-link></div>
        </div>
    </div>
</template>

<script setup>
    import { nextTick, onMounted, ref } from 'vue';
    import { defineProps } from 'vue';
    import  Axios from 'axios';
    import $ from "jquery";
    import "slick-carousel";
    import 'slick-carousel/slick/slick.css';
    import 'slick-carousel/slick/slick-theme.css';

    const props = defineProps({
        sub:String
    })


    const initialized = ref (false);
    const images = ref([]);

    const initializeSlickSlider = () => {
        nextTick(() => {
            const slider = $(".featured_slick_gallery-slide");
            console.log(slider);
            
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
        getImages();
        
    });

    const getImages = async () => {
        try{
            const response = await  Axios.post('http://127.0.0.1/serverside/getImages.php', props.sub);
            console.log(response);
            images.value = response.data;
            console.log(response);
        }catch(error){
            console.log(error);
        }finally{
            if (!initialized.value) {
                initialized.value = true;
                initializeSlickSlider();
            }
        }
    }

</script>
