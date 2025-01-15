<template>
    <div class="property-listing list_view style_new">
        <div class="listing-img-wrapper position-relative">
            <div class="position-absolute top-0 left-0 ms-3 mt-3 z-1">
                <div v-for="(tag, index) in item.tag" :key="index" class="label bg-success text-light d-inline-flex align-items-center justify-content-center me-1" :class="{'bg-success':tag === 'Verified', 'bg-purple':tag === 'SuperAgent', 'bg-danger':tag === 'New'}">
                        <img v-if ="tag === 'Verified'" :src="verified" alt="" class='me-1' />
                        <img v-if ="tag === 'SuperAgent'" :src="user1" alt="" class='me-1'/>
                        <img v-if ="tag === 'New'" :src="moon" alt="" class='me-1'/>
                    {{tag}}
                </div>
            </div>
            <div class="list-img-slide">
                <div class="clior">
                    <div v-for="(el, index) in item.image" :key="index"  ><router-link :to="`/single-property-1/${item.id}`"><img :src="el" class="img-fluid" alt="" :style="{height:height}"></router-link></div>
                </div>
            </div>
        </div>
        <div class="list_view_flex">
            <div class="listing-detail-wrapper mt-1">
                <div class="listing-short-detail-wrap">
                    <div class="_card_list_flex mb-2">
                        <div class="_card_flex_01 d-flex align-items-center">
                            <span v-if="item.tag2 === 'For Rent'" class="label bg-light-success text-success prt-type me-2">For Rent</span>
                            <span v-if="item.tag2 === 'For Sell'"  class="label bg-light-danger text-danger prt-type me-2">For Sell</span>
                            <span class="label bg-light-purple text-purple property-cats">{{item.type}}</span>
                        </div>
                        <div class="_card_flex_last">
                            <h6 class="listing-info-price text-primary fs-4 mb-0">{{item.value}}</h6>
                        </div>
                    </div>
                    <div class="_card_list_flex">
                        <div class="_card_flex_01">
                            <h4 class="listing-name mt-3"><router-link :to="`/single-property-1/${item.id}`" class="prt-link-detail">4789 Resot Relly Market, Montreal Canada, HAQC445</router-link></h4>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="price-features-wrapper">
                <div class="list-fx-features d-flex align-items-center justify-content-between">
                    <div class="listing-card d-flex align-items-center">
                        <div class="square--30 text-muted-2 fs-sm circle gray-simple me-2"><i class="fa-solid fa-building-shield fs-sm"></i></div><span class="text-muted-2">{{item.size}}</span>
                    </div>
                    <div class="listing-card d-flex align-items-center">
                        <div class="square--30 text-muted-2 fs-sm circle gray-simple me-2"><i class="fa-solid fa-bed fs-sm"></i></div><span class="text-muted-2">{{item.beds}}</span>
                    </div>
                    <div class="listing-card d-flex align-items-center">
                        <div class="square--30 text-muted-2 fs-sm circle gray-simple me-2"><i class="fa-solid fa-clone fs-sm"></i></div><span class="text-muted-2">{{item.sqft}}</span>
                    </div>
                </div>
            </div>
            
            <div class="listing-detail-footer d-flex align-items-center justify-content-between">
                <div class="footer-first">
                    <div class="foot-rates">
                        <span class="elio_rate perfect">4.7</span>
                        <div class="_rate_stio">
                            <i class="fa fa-star me-1"></i>
                            <i class="fa fa-star me-1"></i>
                            <i class="fa fa-star me-1"></i>
                            <i class="fa fa-star me-1"></i>
                            <i class="fa fa-star me-1"></i>
                        </div>
                    </div>
                </div>
                <div class="footer-flex">
                    <router-link :to="`/single-property-1/${item.id}`" class="btn btn-md btn-primary fw-medium">View Detail</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { defineProps, onMounted, ref,nextTick  } from 'vue';

    import $ from "jquery";
    import "slick-carousel";
    import 'slick-carousel/slick/slick.css';
    import 'slick-carousel/slick/slick-theme.css';

    defineProps({
        item: Array,
        height: String,
        border:Boolean
    })

    const initialized = ref(false);

    const initializeSlickSlider = () => {
        nextTick(() => {
            const slider = $(".clior");
            try {
            if (slider.length > 0) {
                if (slider.hasClass("slick-initialized")) {
                slider.slick("unslick"); 
                }
                slider.slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
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