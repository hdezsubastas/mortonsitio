<template>
    <div class="property-listing card rounded-3" :class="border ? 'border' : 'border-0'">
        <div class="listing-img-wrapper p-3">
            <div class="list-img-slide position-relative">
                <div class="position-absolute top-0 left-0 ms-3 mt-3 z-1">
                    <div v-for="(tag, index) in item.tag" :key="index" class="label bg-success text-light d-inline-flex align-items-center justify-content-center me-1" :class="{'bg-success':tag === 'Verified', 'bg-purple':tag === 'SuperAgent', 'bg-danger':tag === 'New'}">
                            <img v-if ="tag === 'Verified'" :src="verified" alt="" class='me-1' />
                            <img v-if ="tag === 'SuperAgent'" :src="user1" alt="" class='me-1'/>
                            <img v-if ="tag === 'New'" :src="moon" alt="" class='me-1'/>
                        {{tag}}
                    </div>
                </div>
                <div class="rounded-3 overflow-hidden mb-0 slick-slider">
                    <div v-for="(el, index) in item.image" :key="index"  ><router-link to="/single-property-1"><img :src="el" class="img-fluid" alt="" :style="{height:height}"></router-link></div>
                </div>
            </div>
        </div>
        <div class="listing-caption-wrapper px-3">
            <div class="listing-detail-wrapper">
                <div class="listing-short-detail-wrap">
                    <div class="listing-short-detail">
                        <div class="d-flex align-items-center">
                            <span v-if="item.tag2 === 'For Rent'" class="label bg-light-success text-success prt-type me-2">For Rent</span>
                            <span v-if="item.tag2 === 'For Sell'"  class="label bg-light-danger text-danger prt-type me-2">For Sell</span>
                            <span class="label bg-light-purple text-purple property-cats">{{item.type}}</span>
                        </div>
                        <h4 class="listing-name fw-semibold fs-5 mb-2 mt-3"><router-link to="/single-property-1">{{item.name}}</router-link></h4>
                        <div class="prt-location text-muted-2 d-flex align-items-center"><span class="svg-icon svg-icon-2hx"><img :src="map" alt="" class="me-1"></span>{{item.loction}}</div>
                    </div>
                </div>
            </div>
            <div class="price-features-wrapper d-flex align-items-center justify-content-between my-4">
                <div class="listing-short-detail-flex">
                    <h6 class="listing-card-info-price text-primary ps-0 m-0">$78,500</h6>
                </div>
                <div class="lst-short-btns-groups d-flex align-items-center">
                    <router-link to="" class="square--50 circle text-primary bg-light-primary me-2"><i class="fa-solid fa-code-compare"></i></router-link>
                    <router-link to="" class="square--50 circle text-success bg-light-success me-2"><i class="fa-solid fa-envelope-open-text"></i></router-link>
                    <router-link to="" class="square--50 circle text-danger bg-light-danger"><i class="fa-solid fa-heart-circle-check"></i></router-link>
                </div>
            </div>
            
            <div class="lst-detail-footer d-flex align-items-center justify-content-between border-top py-2 ">
                <div class="footer-first">
                    <div class="foot-reviews-wrap">
                        <div class="foot-reviews-stars">
                            <span><i class="fa-solid fa-star text-warning fs-sm me-1"></i></span>
                            <span><i class="fa-solid fa-star text-warning fs-sm me-1"></i></span>
                            <span><i class="fa-solid fa-star text-warning fs-sm me-1"></i></span>
                            <span><i class="fa-solid fa-star text-warning fs-sm me-1"></i></span>
                            <span><i class="fa-solid fa-star text-warning fs-sm"></i></span>
                        </div>
                        <div class="foot-reviews-subtitle">
                            <span class="text-muted">47 Reviews</span>
                        </div>
                    </div>
                </div>
                <div class="footer-flex">
                    <div class="list-fx-features d-flex align-items-center justify-content-between m-0">
                        <div class="listing-card d-flex align-items-center me-3">
                            <div class="square--30 text-muted-2 fs-sm circle gray-simple me-2"><i class="fa-solid fa-building-shield fs-sm"></i></div><span class="text-muted-2">{{item.size}}</span>
                        </div>
                        <div class="listing-card d-flex align-items-center">
                            <div class="square--30 text-muted-2 fs-sm circle gray-simple me-2"><i class="fa-solid fa-clone fs-sm"></i></div><span class="text-muted-2">{{item.sqft}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

    import { defineProps, onMounted, ref,nextTick  } from 'vue';

    import verified from '@/assets/img/svg/verified.svg'
    import user1 from '@/assets/img/svg/user-1.svg'
    import moon from '@/assets/img/svg/moon.svg'
    import map from '@/assets/img/svg/map-1.svg'

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
            const slider = $(".slick-slider");
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
