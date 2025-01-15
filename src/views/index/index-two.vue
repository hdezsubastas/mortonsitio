<template>
    <div id="main-wrapper">
        <NavbarLight/>

        <div class="image-bottom hero-banner bg-primary" :style="{ background: `url(${bg}) no-repeat`, backgroundSize: 'cover' }" data-overlay="0">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-9 col-md-11 col-sm-12">
                        <div class="inner-banner-text text-center mb-2">
                            <h2 class="mb-4"><span class="font-normal">Find Your</span> Perfect Place.</h2>
                            <p class="fs-5 fw-light px-xl-4 px-lg-4">Cicero famously orated against his political opponent Lucius Sergius Catilina. Occasionally the first Oration against Catiline is taken for type specimens</p>
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

        <section class="bg-light">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-10 text-center">
                        <div class="sec-heading center">
                            <h2>Featured Property For Sale</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <FeatureProperty/>
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 text-center mt-4">
                        <router-link to="/listings-list-with-sidebar" class="btn btn-primary px-lg-5 rounded">Browse More Properties</router-link>
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

        <DownloadApp/>

        <FooterTop :bg="'bg-primary'"/>
        <FooterLight/>
        <ScrollToTop/>
    </div>
</template>

<script setup>

    import bg from '@/assets/img/banner.svg'

    import NavbarLight from '@/components/navbar/navbar-light.vue';
    import FormOne from '@/components/form/form-one.vue';
    import AchievementCounter from '@/components/achievement-counter.vue';
    import PropertySlider from '@/components/property/property-slider.vue';
    import FeatureProperty from '@/components/property/feature-property.vue';
    import TeamOne from '@/components/team-one.vue';
    import ClientOne from '@/components/client-one.vue';
    import PricingOne from '@/components/pricing-one.vue';
    import DownloadApp from '@/components/download-app.vue';
    import FooterTop from '@/components/footer/footer-top.vue';
    import FooterLight from '@/components/footer/footer-light.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
</script>