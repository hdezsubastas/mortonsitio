<template>
    <div class="property-listing list_view style_new" :class="border ? 'border rounded' : ''">
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
            
            <div class="listing-detail-footer mt-2 d-flex align-items-center justify-content-between">
                <div class="footer-first">
                    <div class="listing-features-info">
                        <ul class="featur_5269">
                            <li><div class="ft_th"><i class="fa-solid fa-dog text-muted-2"></i></div></li>
                            <li><div class="ft_th"><i class="fa-solid fa-snowflake text-muted-2"></i></div></li>
                            <li><div class="ft_th"><i class="fa-solid fa-wifi text-muted-2"></i></div></li>
                            <li><div class="ft_th"><i class="fa-solid fa-dumbbell text-muted-2"></i></div></li>
                            <li><div class="ft_th"><i class="fa-solid fa-car text-muted-2"></i></div></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-flex">
                    <router-link to="#" data-bs-toggle="modal" data-bs-target="#availability" class="btn btn-md btn-primary fw-medium"  data-bs-placement="top" data-bs-title="Check Availability">
                        <span class="svg-icon text-light svg-icon-2hx me-1">
                            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"/>
                                <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"/>
                            </svg>
                        </span>Availability
                    </router-link>
                </div>
            </div>
        </div>
        <div class="modal fade" id="availability" tabindex="-1" role="dialog" aria-labelledby="sign-up" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered login-pop-form" role="document">
                <div class="modal-content" id="sign-up">
                    <span class="mod-close" data-bs-dismiss="modal" aria-hidden="true"><i class="fa-solid fa-circle-xmark text-muted-2 fs-5"></i></span>
                    <div class="modal-body">
                        <div class="text-center">
                            <h2 class="mb-0">CONTACT</h2>
                            <h4 class="my-2">5689 Resot Relly, Canada</h4>
                            <router-link class="_calss_tyui theme-cl" to="tel:4048651904">(404) 865-1904</router-link>
                        </div>
                        <div class="login-form mt-2">
                            <form>
                                <div class="row">
                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <label class="mb-1">Message</label>
                                            <textarea class="form-control ht-120">I'm interested in 5689 Resot Relly, Canada. Please send me current availability and additional details.</textarea>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <label class="mb-1">Name*</label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <label class="mb-1">Email*</label>
                                            <input type="email" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <label class="mb-1">Phone</label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="default-terms_wrap">
                                    <div class="default-terms_flex">
                                        <input id="tm" class="form-check-input" name="tm" type="checkbox">
                                        <label for="tm" class="form-check-label"></label>
                                    </div>
                                    <div class="default-terms">By submitting this form, you agree to our <router-link to="#" title="Terms of Service">Terms of Service</router-link> and <a href="#" title="Privacy Policy">Privacy Policy</a>.</div>
                                </div>
                                
                                <div class="form-group mt-3">
                                    <button type="submit" class="btn btn-primary full-width fw-medium">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
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