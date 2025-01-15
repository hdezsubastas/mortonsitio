<template>
    <div id="main-wrapper">
        <NavbarLight/>

        <div class="hero-banner vedio-banner">
            <div class="overlay"></div>	
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                <source :src="video" type="video/mp4">
            </video>

            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-9 col-md-11 col-sm-12">
                        <div class="inner-banner-text text-center">
                            <p class="lead-i text-light">Find Best Places in United States</p>
                            <h2 class="text-light"><span class="font-normal">Find Your</span> Perfect Place.</h2>
                        </div>
                        <FormOne/>
                    </div>
                </div>
            </div>
        </div>
        <section>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-10 text-center">
                        <div class="sec-heading center mb-4">
                            <h2>Achievement</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <AchievementCounter/>
            </div>
        </section>
        <div class="clearfix"></div>
        <section class="pt-0">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-10 text-center">
                        <div class="sec-heading center">
                            <h2>Recent Property For Rent</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <PropertySlider/>
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
    import video from '@/assets/img/banners.mp4'
    import AchievementCounter from '@/components/achievement-counter.vue';
    import ClientOne from '@/components/client-one.vue';
    import FooterDark from '@/components/footer/footer-dark.vue';
    import FooterTop from '@/components/footer/footer-top.vue';
    import FormOne from '@/components/form/form-one.vue';
    import NavbarLight from '@/components/navbar/navbar-light.vue';
    import PricingOne from '@/components/pricing-one.vue';
    import PropertySlider from '@/components/property/property-slider.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
    import TeamOne from '@/components/team-one.vue';
</script>
