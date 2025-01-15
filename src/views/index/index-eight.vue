<template>
    <div id="main-wrapper">
        <NavbarTop/>
        <NavbarDark/>

        <div class="home-slider margin-bottom-0">
            <div :style="{ background: `url(${bg1}) no-repeat`, backgroundSize: 'cover' }" class="item">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="home-slider-container">
                                <div class="home-slider-desc">
                                    <div class="modern-pro-wrap">
                                        <span class="property-type bg-light-success text-success">For Sale</span>
                                        <span class="property-featured bg-danger">Featured</span>
                                    </div>
                                    <div class="home-slider-title">
                                        <h3><router-link to="/single-property-page-1">Aashirvaad Apartment</router-link></h3>
                                        <span><i class="fa-solid fa-location-dot"></i> 778 Country St. Panama City, FL</span>
                                    </div>
                                    <div class="slide-property-info">
                                        <ul>
                                            <li>Beds: 4</li>
                                            <li>Bath: 2</li>
                                            <li>sqft: 5270</li>
                                        </ul>
                                    </div>
                                    <div class="listing-price-with-compare">
                                        <h4 class="list-pr fs-3">$2,580</h4>
                                        <div class="lpc-right d-flex align-items-center mt-3">
                                            <router-link to="/compare-property" class="square--50 rounded gray-simple me-2"><i class="fa-solid fa-code-compare"></i></router-link>
                                            <router-link to="#" class="square--50 rounded gray-simple"><i class="fa-solid fa-heart"></i></router-link>
                                        </div>
                                    </div>
                                    <router-link to="/single-property-page-1" class="read-more bg-primary">View Details <i class="fa fa-angle-right"></i></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div :style="{ background: `url(${bg2}) no-repeat`, backgroundSize: 'cover' }" class="item">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="home-slider-container">
                                <div class="home-slider-desc">
                                    <div class="modern-pro-wrap">
                                        <span class="property-type bg-light-success text-success">For Sale</span>
                                        <span class="property-featured bg-danger">Featured</span>
                                    </div>
                                    <div class="home-slider-title">
                                        <h3><router-link to="/single-property-page-1">Aashirvaad Apartment</router-link></h3>
                                        <span><i class="fa-solid fa-location-dot"></i> 778 Country St. Panama City, FL</span>
                                    </div>
                                    <div class="slide-property-info">
                                        <ul>
                                            <li>Beds: 4</li>
                                            <li>Bath: 2</li>
                                            <li>sqft: 5270</li>
                                        </ul>
                                    </div>
                                    <div class="listing-price-with-compare">
                                        <h4 class="list-pr fs-3">$2,580</h4>
                                        <div class="lpc-right d-flex align-items-center mt-3">
                                            <router-link to="/compare-property" class="square--50 rounded gray-simple me-2"><i class="fa-solid fa-code-compare"></i></router-link>
                                            <router-link to="#" class="square--50 rounded gray-simple"><i class="fa-solid fa-heart"></i></router-link>
                                        </div>
                                    </div>
                                    <router-link to="/single-property-page-1" class="read-more bg-primary">View Details <i class="fa fa-angle-right"></i></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div :style="{ background: `url(${bg3}) no-repeat`, backgroundSize: 'cover' }" class="item">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="home-slider-container">
                                <div class="home-slider-desc">
                                    <div class="modern-pro-wrap">
                                        <span class="property-type bg-light-success text-success">For Sale</span>
                                        <span class="property-featured bg-danger">Featured</span>
                                    </div>
                                    <div class="home-slider-title">
                                        <h3><router-link to="/single-property-page-1">Aashirvaad Apartment</router-link></h3>
                                        <span><i class="fa-solid fa-location-dot"></i> 778 Country St. Panama City, FL</span>
                                    </div>
                                    <div class="slide-property-info">
                                        <ul>
                                            <li>Beds: 4</li>
                                            <li>Bath: 2</li>
                                            <li>sqft: 5270</li>
                                        </ul>
                                    </div>
                                    <div class="listing-price-with-compare">
                                        <h4 class="list-pr fs-3">$2,580</h4>
                                        <div class="lpc-right d-flex align-items-center mt-3">
                                            <router-link to="/compare-property" class="square--50 rounded gray-simple me-2"><i class="fa-solid fa-code-compare"></i></router-link>
                                            <router-link to="#" class="square--50 rounded gray-simple"><i class="fa-solid fa-heart"></i></router-link>
                                        </div>
                                    </div>
                                    <router-link to="/single-property-page-1" class="read-more bg-primary">View Details <i class="fa fa-angle-right"></i></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div class="sec-heading center">
                            <h2>How It Works?</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <HowItsWork/>
            </div>
        </section>
        <div class="clearfix"></div>

        <section class="gray-simple">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div class="sec-heading center">
                            <h2>Explore Good places</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <GridOne/>
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
                        <router-link to="/listings-list-with-sidebar" class="btn btn-primary px-md-5 rounded">Browse More Properties</router-link>
                    </div>
                </div>
            </div>	
        </section>

        <section>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-10 text-center">
                        <div class="sec-heading center">
                            <h2>Explore Good places</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                
                <div class="row justify-content-center g-4">
                    <div v-for="(item, index) in explorePlace.slice(0,8)" :key="index" class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="card border-0 rounded-4 h-100 position-relative">
                            <router-link to="/place-search">
                                <div class="abx-thumb" data-overlay="3">
                                    <img :src="item.image" class="img-fluid" alt=""/>
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
        </section>

        <section class="gray-bg">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-10 text-center">
                        <div class="sec-heading center">
                            <h2>Good Reviews by Customers</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <ClientOne/>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-10 text-center">
                        <div class="sec-heading center">
                            <h2>Explore Featured Agents</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <TeamOne/>
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
                        <router-link to="/listings-list-with-sidebar" class="btn btn-primary px-lg-5 rounded">Explore More Agents</router-link>
                    </div>
                </div>
            </div>
        </section>
        <div class="clearfix"></div>

        <FooterTop :bg="'theme-bg'"/>


        <FooterDark/>

        <ScrollToTop/>

    </div>
</template>

<script setup>
    import { nextTick, onMounted, ref } from 'vue';

    import bg1 from '@/assets/img/slider-1.jpg'
    import bg2 from '@/assets/img/slider-2.jpg'
    import bg3 from '@/assets/img/slider-3.jpg'

    import NavbarDark from '@/components/navbar/navbar-dark.vue';
    import NavbarTop from '@/components/navbar/navbar-top.vue';
    import HowItsWork from '@/components/how-its-work.vue';
    import GridOne from '@/components/property/grid-one.vue';
    import ClientOne from '@/components/client-one.vue';
    import TeamOne from '@/components/team-one.vue';
    import FooterTop from '@/components/footer/footer-top.vue';
    import FooterDark from '@/components/footer/footer-dark.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';

    import $ from "jquery";
    import "slick-carousel";
    import 'slick-carousel/slick/slick.css';
    import 'slick-carousel/slick/slick-theme.css';
    import { explorePlace } from '@/data/data';

    const initialized = ref(false);

    const initializeSlickSlider = () => {
    nextTick(() => {
        const slider = $('.home-slider');
        try {
        if (slider.length > 0) {
            if (slider.hasClass("slick-initialized")) {
                slider.slick("unslick"); 
            }
            slider.slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows:true,
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
