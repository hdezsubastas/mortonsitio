<template>
    <div id="main-wrapper">

        <NavbarLight/>

        <div class="image-cover hero-banner" :style="{ background: `url(${bg}) no-repeat`, backgroundSize: 'cover' }" data-overlay="6">
            <div class="container">
                <h1 class="big-header-capt mb-0">Find Your Property</h1>
                <p class="text-center mb-5">From as low as $10 per day with limited time offer</p>
                <FormTwo/>
            </div>
        </div>

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
        </section>

        <section class="bg-light">
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

        <section class="gray-bg">
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

        <CtaOne/>

        <section>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-10 text-center">
                        <div class="sec-heading center">
                            <h2>Latest Updates By Resido</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <BlogOne/>
            </div>		
        </section>

        <FooterTop :bg="'theme-bg'"/>
        <FooterDark/>
        <ScrollToTop/>
    </div>
</template>

<script setup>
    import bg from '@/assets/img/banner-7.jpg'
    import BlogOne from '@/components/blog-one.vue';
    import CtaOne from '@/components/cta-one.vue';
    import FooterDark from '@/components/footer/footer-dark.vue';
    import FooterTop from '@/components/footer/footer-top.vue';
    import FormTwo from '@/components/form/form-two.vue';
    import HowItsWork from '@/components/how-its-work.vue';
    import NavbarLight from '@/components/navbar/navbar-light.vue';
    import GridOne from '@/components/property/grid-one.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
    import TeamOne from '@/components/team-one.vue';
    
    import { explorePlace } from '@/data/data';
</script>