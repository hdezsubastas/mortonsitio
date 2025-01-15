<template>
    <div id="main-wrapper">
        <NavbarDark/>

        <div class="image-bottom hero-banner bg-primary" :style="{ background: `url(${bg}) no-repeat`, backgroundSize: 'cover' }" data-overlay="0">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-9 col-md-11 col-sm-12">
                        <div class="inner-banner-text text-center mb-2">
                            <h2 class="mb-4"><span class="font-normal">Ready. Set. Sold</span></h2>
                            <p class="fs-5 fw-light px-xl-4 px-lg-4">Cicero famously orated against his political opponent Lucius Sergius Catilina. Occasionally the first Oration against Catiline is taken for type specimens</p>
                        </div>
                        <FormOne/>
                    </div>
                </div>
            </div>
        </div>

        <section>
            <div class="container">
                <div class="row justify-content-start">
                    <div class="col-lg-7 col-md-10">
                        <div class="small-heads">
                            <h2 class="fs-5 mb-0">Property For Rent</h2>
                            <p>Recent Rent Properties</p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-12 col-md-12">
                        <div class="floral-wraps">
                            <div class="slide-livok top-arrow">
                                <div v-for="(item, index) in propertyData" :key="index" class="single-slide">
                                    <GridLayout :item="item" :height="'193px'" :border="true"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="clearfix"></div>

        <section class="pt-0">
            <div class="container">
                <div class="row justify-content-start">
                    <div class="col-lg-7 col-md-10">
                        <div class="small-heads">
                            <h2 class="fs-5 mb-0">Properties For Sell</h2>
                            <p>Best Properties For Sell</p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-12 col-md-12">
                        <div class="floral-wraps">
                            <div class="slide-livok top-arrow">
                                <div v-for="(item, index) in propertyData" :key="index" class="single-slide">
                                    <GridLayout :item="item" :height="'193px'" :border="true"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="clearfix"></div>

        <section class="pt-0">
            <div class="container">
                <div class="row justify-content-start">
                    <div class="col-lg-7 col-md-10">
                        <div class="small-heads">
                            <h2 class="fs-5 mb-0">Explore Top Places</h2>
                            <p>Best Places</p>
                        </div>
                    </div>
                </div>
                <TopProperty/>
            </div>
        </section>
        <div class="clearfix"></div>

        <section class="pt-0">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12 col-md-12">
                        <div class="bg-primary rounded-4 py-md-5 px-md-5 p-4">
                            <div class="row align-items-center justify-content-between py-5">
                                <div class="col-xl-9 col-lg-8 col-md-7 my-2">
                                    <h2 class="fs-1 text-light lh-base">New Projects in United States</h2>
                                    <p class="text-light m-0">New projects, verified by our quality control teams.</p>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-5 my-2">
                                    <router-link to="#" class="btn btn-lg btn-whites full-width fw-medium">View New Projects</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="clearfix"></div>

        <section class="pt-0">
            <div class="container">
                <div class="row justify-content-start">
                    <div class="col-lg-7 col-md-10">
                        <div class="small-heads">
                            <h2 class="fs-5 mb-0">Meet Top Agents</h2>
                            <p>Top Agents</p>
                        </div>
                    </div>
                </div>
                <ClientTwo/>
            </div>
        </section>
        <div class="clearfix"></div>

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
                            <h2>See our packages</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <PricingOne/>
            </div>	
        </section>

        <FooterTop :bg="'theme-bg'"/>

        <FooterDark/>

        <ScrollToTop/>
    </div>
</template>

<script setup>
    import {  onMounted, ref,nextTick  } from 'vue';
    import bg from '@/assets/img/banner.svg'
    import FormOne from '@/components/form/form-one.vue';
    import NavbarDark from '@/components/navbar/navbar-dark.vue';
    import GridLayout from '@/components/property/grid-layout.vue';
    import TopProperty from '@/components/property/top-property.vue';
    import ClientTwo from '@/components/client-two.vue';
    import ClientOne from '@/components/client-one.vue';
    import PricingOne from '@/components/pricing-one.vue';
    import FooterTop from '@/components/footer/footer-top.vue';
    import FooterDark from '@/components/footer/footer-dark.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';

    import { propertyData } from '@/data/data';

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
