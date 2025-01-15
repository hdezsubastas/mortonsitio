<template>
    <div id="main-wrapper">
        <NavbarDark/>

        <div class="image-cover hero-banner" :style="{ background: `url(${bg}) no-repeat`, backgroundSize: 'cover' }">
            <div class="container">
                <div class="hero-search-wrap">
                    <div class="hero-search">
                        <h1>Find accessible homes to rent</h1>
                    </div>
                    <div class="hero-search-content side-form">
                        
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="form-group">
                                    <div class="input-with-icon">
                                        <input type="text" class="form-control" placeholder="Search for a location">
                                        <img :src="pin" width="18" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="form-group">
                                    <label class="mb-1">Min Price</label>
                                    <Multiselect v-model="selected" :options="options" placeholder="No Min" class="form-control px-0"/>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="form-group">
                                    <label class="mb-1">Max Price</label>
                                    <Multiselect v-model="selected" :options="maxprice" placeholder="No Max" class="form-control px-0"/>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="form-group">
                                    <label class="mb-1">Property Type</label>
                                    <Multiselect v-model="selected" :options="ptype" placeholder="Show All" class="form-control px-0"/>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="form-group">
                                    <label class="mb-1">Bed Rooms</label>
                                    <Multiselect v-model="selected" :options="rooms" placeholder="BedRooms" class="form-control px-0"/>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="form-group">
                                    <label class="mb-1">Property Location</label>
                                    <Multiselect v-model="selected" :options="cities" placeholder="All Cities" class="form-control px-0"/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="hero-search-action">
                        <router-link to="#" class="btn full-width btn-primary">Search Result</router-link>
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

        <section class="bg-light">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div class="sec-heading center">
                            <h2>Explore Recent properties</h2>
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

        <section class="gray">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-7 col-md-10 text-center">
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
                    <div class="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div class="sec-heading center">
                            <h2>See our packages</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                
               <PricingOne/>
            </div>	
        </section>

        <SwiperSlide/>
        
        
        <FooterTop :bg="'theme-bg'"/>
        <FooterDark/>

        <ScrollToTop/>

    </div>
</template>

<script setup>
    import { ref } from 'vue';

    import bg from '@/assets/img/bg-1.jpg'
    import pin from '@/assets/img/pin.svg'

    import Multiselect from '@vueform/multiselect';
    import '@vueform/multiselect/themes/default.css';

    import NavbarDark from '@/components/navbar/navbar-dark.vue';
    import HowItsWork from '@/components/how-its-work.vue';
    import GridOne from '@/components/property/grid-one.vue';
    import BestLocation from '@/components/best-location.vue';
    import ClientOne from '@/components/client-one.vue';
    import PricingOne from '@/components/pricing-one.vue';
    import FooterTop from '@/components/footer/footer-top.vue';
    import FooterDark from '@/components/footer/footer-dark.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
    import SwiperSlide from '@/components/swiper/swiper-slide.vue';

    const options = ref(['$500','$1000','$1500','2000','3000']);
    const maxprice = ref(['$1000','$1500','$2000','3000','5000']);
    const ptype = ref(['Rental','Villas','Offices','Condos','Studios']);
    const rooms = ref(['1','2','3','4','5'])
    const cities = ref([
        'Los Angeles, CA','New York City, NY','Chicago, IL','Houston, TX','Philadelphia, PA','San Antonio, TX','San Jose, CA',
    ])
</script>
