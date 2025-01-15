<template>
    <div id="main-wrapper">
        <NavbarDark/>

        <section class="bg-title">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-11 col-md-12">
                        <div class="property_block_wrap style-4">
                            <div class="prt-detail-title-desc">
                                <span class="label text-light bg-warning mb-1 d-inline-flex">For Sale</span>
                                <h3 class="text-light mt-3">{{data && data.name ? data.name : 'Jannat Graynight Mood In Siver Colony, London'}}</h3>
                                <span><i class="lni-map-marker"></i>{{data && data.loction ? data.loction : ' 778 Country St. Panama City, FL'}}</span>
                                <h3 class="prt-price-fix text-light mt-2">$7,600<sub>/month</sub></h3>
                                <div class="pbwts-social mt-4">
                                    <ul>
                                        <li>Share:</li>
                                        <li><router-link to=""><i class="fa-brands fa-facebook"></i></router-link></li>
                                        <li><router-link to=""><i class="fa-brands fa-linkedin"></i></router-link></li>
                                        <li><router-link to=""><i class="fa-brands fa-twitter"></i></router-link></li>
                                        <li><router-link to=""><i class="fa-brands fa-instagram"></i></router-link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>	
                </div>
            </div>
        </section>

        <section class="gray-simple">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12 col-sm-12">
                        <PropertyDetail/>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <DetailSidebar/>
                    </div>
                </div>
            </div>
        </section>

        <FooterTop :bg="'theme-bg'"/>
        <FooterDark/>
        <ScrollToTop/>
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    import FooterDark from '@/components/footer/footer-dark.vue';
    import FooterTop from '@/components/footer/footer-top.vue';
    import NavbarDark from '@/components/navbar/navbar-dark.vue';
    import DetailSidebar from '@/components/property/detail-sidebar.vue';
    import PropertyDetail from '@/components/property/property-detail.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
    import { propertyData } from '@/data/data';

    const route = useRoute()

    const data = propertyData.find((item)=>item.id === parseInt(route.params.id))
</script>
