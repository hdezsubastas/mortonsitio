<template>
    <div class="property-listing list_view style_new">
        <div class="listing-img-wrapper position-relative">
            <div class="like_unlike_prt">
                <label class="toggler toggler-danger"><input type="checkbox"><i class="fa fa-heart"></i></label>
            </div>
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
            
            <div class="listing-detail-footer pb-0">
                <div class="footer-first">
                    <router-link to="#" class="btn btn-md btn-primary fw-medium me-1">
                        <span class="svg-icon text-light svg-icon-2hx me-1">
                            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"/>
                                <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"/>
                            </svg>
                        </span>Availability
                    </router-link>
                    <router-link to="tel:4048651904" class="btn btn-md btn-light-primary px-3 me-1">
                        <span class="svg-icon svg-icon-muted svg-icon-2hx">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 21C6 21.6 6.4 22 7 22H17C17.6 22 18 21.6 18 21V20H6V21Z" fill="currentColor"/>
                                <path d="M12 4C11.4 4 11 3.6 11 3V2H13V3C13 3.6 12.6 4 12 4Z" fill="currentColor"/>
                                <path opacity="0.3" d="M18 3V20H6V3C6 2.4 6.4 2 7 2H17C17.6 2 18 2.4 18 3ZM16 11C16 8.5 13.7 6.49998 11.1 7.09998C9.60001 7.39998 8.50001 8.6001 8.10001 10.1001C7.80001 11.5001 8.2 12.7 9 13.7L11.2 16.2C11.6 16.6 12.3 16.6 12.7 16.2L14.9 13.7C15.6 13 16 12 16 11Z" fill="currentColor"/>
                                <path d="M12 12.5C12.8284 12.5 13.5 11.8284 13.5 11C13.5 10.1716 12.8284 9.5 12 9.5C11.1716 9.5 10.5 10.1716 10.5 11C10.5 11.8284 11.1716 12.5 12 12.5Z" fill="currentColor"/>
                            </svg>
                        </span>
                    </router-link>
                    <router-link to="" class="btn btn-md btn-light-primary px-3 me-1">
                        <span class="svg-icon svg-icon-muted svg-icon-2hx">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z" fill="currentColor"/>
                                <path d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z" fill="currentColor"/>
                            </svg>
                        </span>
                    </router-link>
                    <router-link to="" class="btn btn-md btn-light-primary px-3">
                        <span class="svg-icon svg-icon-muted svg-icon-2hx">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.3721 4.65439C17.6415 4.23815 16.8052 4 15.9142 4C14.3444 4 12.9339 4.73924 12.003 5.89633C11.0657 4.73913 9.66 4 8.08626 4C7.19611 4 6.35789 4.23746 5.62804 4.65439C4.06148 5.54462 3 7.26056 3 9.24232C3 9.81001 3.08941 10.3491 3.25153 10.8593C4.12155 14.9013 9.69287 20 12.0034 20C14.2502 20 19.875 14.9013 20.7488 10.8593C20.9109 10.3491 21 9.81001 21 9.24232C21.0007 7.26056 19.9383 5.54462 18.3721 4.65439Z" fill="currentColor"/>
                            </svg>
                        </span>
                    </router-link>
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