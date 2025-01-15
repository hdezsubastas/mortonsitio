<template>
    <div id="main-wrapper">
        <NavbarDark :transparent="true"/>

        <div class="image-cover hero-banner" :style="{ background: `#eff6ff url(${bg}) no-repeat`, backgroundSize: 'cover' }">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-9 col-md-11 col-sm-12">
                        <div class="inner-banner-text text-center">
                            <p class="d-inline-flex sm-small text-light rounded-5 px-2 py-1 bg-info align-items-center">We just launched our service in New York, United States<span class="sm-small px-2 rounded-5 bg-white text-dark ms-2">New</span></p>
                            <h2>Find <span class="text-primary">Real Properties</span> at Cheapest Price in california</h2>
                            <p class="small">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores occaecati cupiditate quas molestias excepturi</p>
                        </div>
                        <FormThree/>
                    </div>
                </div>
            </div>
        </div>

        <section>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-10 text-center">
                        <div class="sec-heading center mb-4">
                            <h2>Explore categories</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center gx-3 gy-3 mt-3">
                    <div v-for="(item, index) in categoriesData" :key="index" class="col-xl-2 col-lg-3 col-md-3 col-6">
                        <div class="classical-cats-wrap">
                            <a class="classical-cats-boxs">
                                <div class="classical-cats-icon px-4 py-4 rounded fs-2" :class="item.bg">
                                    <i :class="item.icon"></i>
                                </div>
                                <div class="classical-cats-wrap-content">
                                    <h4>{{item.title}}</h4>
                                    <p>{{item.subTitle}}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="clearfix"></div>

        <section class="pt-0">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div class="sec-heading center">
                            <h2>Find Best Locations</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <BestLocation/>
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
                        <router-link to="/listings-list-with-sidebar" class="btn btn-primary px-md-5 rounded">Browse More Locations</router-link>
                    </div>
                </div>
            </div>
        </section>

        <section class="gray-simple">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div class="sec-heading mss">
                            <h2>Featured Property For Sale</h2>
                            <p>At vero eos et accusamus dignissimos ducimus</p>
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

        <SubscribeDark/>

        <FooterDark/>

        <ScrollToTop/>
    </div>
</template>

<script setup>
    import bg from '@/assets/img/city-banner.png'
    import { categoriesData } from '@/data/data';

    import BestLocation from '@/components/best-location.vue';
    import ClientOne from '@/components/client-one.vue';
    import DownloadApp from '@/components/download-app.vue';
    import FooterDark from '@/components/footer/footer-dark.vue';
    import FormThree from '@/components/form/form-three.vue';
    import NavbarDark from '@/components/navbar/navbar-dark.vue';
    import PricingOne from '@/components/pricing-one.vue';
    import GridOne from '@/components/property/grid-one.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
    import SubscribeDark from '@/components/subscribe-dark.vue';
    import TeamOne from '@/components/team-one.vue';
</script>
