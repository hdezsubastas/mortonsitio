<template>
    <div id="main-wrapper">
        <NavbarDark/>
        <BannerOne/>

        <section class="gray-simple rtl p-0">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-11 col-md-12">
                        <div class="property_block_wrap style-3">
                            <div class="pbw-flex-1">
                                <div class="pbw-flex-thumb">
                                    <img :src="agency" class="img-fluid" alt="" />
                                </div>
                            </div>
                            
                            <div class="pbw-flex">
                                <div class="prt-detail-title-desc">
                                    <span class="label text-light bg-success">For Sale</span>
                                    <h3 class="mt-2">{{data && data.name ? data.name : 'Jannat Graynight Mood In Siver Colony, London'}}</h3>
                                    <span><i class="lni-map-marker"></i>{{data && data.loction ? data.loction : ' 778 Country St. Panama City, FL'}}</span>
                                    <h3 class="prt-price-fix text-primary mt-2">$7,600<sub>/month</sub></h3>
                                    <div class="list-fx-features">
                                        <div class="listing-card-info-icon">
                                            <div class="inc-fleat-icon me-1"><img :src="bed" width="13" alt=""></div>3 Beds
                                        </div>
                                        <div class="listing-card-info-icon">
                                            <div class="inc-fleat-icon me-1"><img :src="bathtub" width="13" alt=""></div>1 Bath
                                        </div>
                                        <div class="listing-card-info-icon">
                                            <div class="inc-fleat-icon me-1"><img :src="move" width="13" alt=""></div>800 sqft
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>	
                </div>
            </div>
        </section>

        <section class="gray-simple min">
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
    import agency from '@/assets/img/agency-1.png'
    import BannerOne from '@/components/banner-one.vue';
    import NavbarDark from '@/components/navbar/navbar-dark.vue';
    import bed from '@/assets/img/bed.svg'
    import bathtub from '@/assets/img/bathtub.svg'
    import move from '@/assets/img/move.svg'
    import DetailSidebar from '@/components/property/detail-sidebar.vue';
    import PropertyDetail from '@/components/property/property-detail.vue';
    import FooterTop from '@/components/footer/footer-top.vue';
    import FooterDark from '@/components/footer/footer-dark.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
    import { propertyData } from '@/data/data';

    const route = useRoute()

    const data = propertyData.find((item)=>item.id === parseInt(route.params.id))
</script>
