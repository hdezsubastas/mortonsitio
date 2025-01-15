<!-- eslint-disable no-mixed-spaces-and-tabs -->
<template>
    <div id="main-wrapper">
        <NavbarDark/>

        <div class="image-cover hero-banner" :style="{ background: `#eff6ff url(${bg}) no-repeat`, backgroundSize: 'cover' }">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-9 col-md-11 col-sm-12">
                        <div class="inner-banner-text text-center">
                            <p class="lead-i">Amet consectetur adipisicing <span class="badge badge-success">New</span></p>
                            <h2><span class="font-normal">Find Your</span> Perfect Place.</h2>
                        </div>
                        <FormThree/>
                    </div>
                </div>
            </div>
        </div>

        <section>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-7 col-md-10">
                        <div class="sec-heading text-center">
                            <h2>Choose Property Type</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <PropertyType/>
            </div>
        </section>
        <div class="clearfix"></div>

        <section class="pt-0">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div class="sec-heading center">
                            <h2>Explore Good places</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <GridOne :border="true"/>
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
                        <router-link to="/listings-list-with-sidebar" class="btn btn-primary px-md-5 rounded">Browse More Properties</router-link>
                    </div>
                </div>
            </div>	
        </section>

        <section class="bg-light">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-10 text-center">
                        <div class="sec-heading center">
                            <h2>Explore Featured Agents</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <ClientThree/>
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
                        <router-link to="/listings-list-with-sidebar" class="btn btn-primary px-lg-5 rounded">Explore More Agents</router-link>
                    </div>
                </div>
            </div>
        </section>
        <div class="clearfix"></div>

        <section>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-10 text-center">
                        <div class="sec-heading center">
                            <h2>Featured Property For Sale</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <FeatureProperty :border="true"/>
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 text-center mt-4">
                        <router-link to="/listings-list-with-sidebar" class="btn btn-primary px-lg-5 rounded">Browse More Properties</router-link>
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
                            <h2>Explore Properties in Best Places</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <BestPlace/>
            </div>	
        </section>

        <DownloadApp/>

        <FooterTop :bg="'theme-bg'"/>

        <FooterDark/>

        <ScrollToTop/>
    </div>
</template>

<script setup>
    import bg from '@/assets/img/home-2.png'
    
    import FormThree from '@/components/form/form-three.vue';
    import NavbarDark from '@/components/navbar/navbar-dark.vue';
    import PropertyType from '@/components/property/property-type.vue';
    import GridOne from '@/components/property/grid-one.vue';
    import ClientThree from '@/components/client-three.vue';
    import FeatureProperty from '@/components/property/feature-property.vue';
    import ClientOne from '@/components/client-one.vue';
    import BestPlace from '@/components/property/best-place.vue';
    import DownloadApp from '@/components/download-app.vue';
    import FooterTop from '@/components/footer/footer-top.vue';
    import FooterDark from '@/components/footer/footer-dark.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
</script>
